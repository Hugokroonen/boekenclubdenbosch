-- Rollen in een aparte tabel (nooit op profiel/gebruiker zelf)
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gebruiker ziet eigen rollen"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Bootstrap: deze e-mailadressen zijn altijd beheerder
CREATE OR REPLACE FUNCTION public.is_beheerder()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    public.has_role(auth.uid(), 'admin')
    OR lower(coalesce(auth.jwt() ->> 'email', '')) IN (
      'hugokroonen@hotmail.nl'
    )
$$;

GRANT SELECT, DELETE ON public.inzendingen TO authenticated;

CREATE POLICY "Beheerder mag inzendingen lezen"
ON public.inzendingen FOR SELECT TO authenticated
USING (public.is_beheerder());

CREATE POLICY "Beheerder mag inzendingen verwijderen"
ON public.inzendingen FOR DELETE TO authenticated
USING (public.is_beheerder());
