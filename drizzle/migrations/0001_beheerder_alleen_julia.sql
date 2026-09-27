CREATE OR REPLACE FUNCTION public.is_beheerder()
 RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
  SELECT lower(coalesce(auth.jwt() ->> 'email', '')) = 'juliakroonen71@gmail.com'
     AND coalesce((auth.jwt() -> 'user_metadata' ->> 'email_verified')::boolean, true)
$$;