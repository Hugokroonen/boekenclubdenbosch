CREATE TABLE public.inzendingen (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('lid', 'auteur', 'contact')),
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  leeftijd TEXT,
  genres TEXT,
  boek_titel TEXT,
  boek_omschrijving TEXT,
  aantal_paginas TEXT,
  interesse TEXT,
  samenwerking TEXT,
  bericht TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.inzendingen TO anon;
GRANT INSERT, SELECT ON public.inzendingen TO authenticated;
GRANT ALL ON public.inzendingen TO service_role;

ALTER TABLE public.inzendingen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Iedereen mag een formulier insturen"
  ON public.inzendingen FOR INSERT TO anon, authenticated
  WITH CHECK (true);