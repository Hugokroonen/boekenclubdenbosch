ALTER TABLE public.inzendingen
  ADD COLUMN IF NOT EXISTS voornaam text,
  ADD COLUMN IF NOT EXISTS achternaam text,
  ADD COLUMN IF NOT EXISTS telefoon text;

ALTER TABLE public.inzendingen ALTER COLUMN email DROP NOT NULL;
ALTER TABLE public.inzendingen ALTER COLUMN naam DROP NOT NULL;