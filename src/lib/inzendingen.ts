import { supabase } from "@/integrations/supabase/client";

export type InzendingType = "lid" | "auteur" | "contact";

export type Inzending = {
  type: InzendingType;
  naam: string;
  email: string;
  leeftijd?: string;
  genres?: string;
  boek_titel?: string;
  boek_omschrijving?: string;
  aantal_paginas?: string;
  interesse?: string;
  samenwerking?: string;
  bericht?: string;
};

/** Slaat een formulierinzending op zodat de eigenaar 'm terugvindt in het dashboard. */
export async function verstuurInzending(inzending: Inzending) {
  const { error } = await supabase.from("inzendingen").insert(inzending);
  if (error) throw error;
}

export function isGeldigEmail(waarde: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(waarde.trim());
}
