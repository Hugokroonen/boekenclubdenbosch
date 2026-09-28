import { supabase } from "@/integrations/supabase/client";

export type InzendingType = "lid" | "auteur" | "contact";

export type Inzending = {
  type: InzendingType;
  naam?: string;
  voornaam?: string;
  achternaam?: string;
  telefoon?: string;
  email?: string;
  leeftijd?: string;
  genres?: string;
  boek_titel?: string;
  boek_omschrijving?: string;
  aantal_paginas?: string;
  interesse?: string;
  samenwerking?: string;
  bericht?: string;
};

/** E-mailadres dat bij elke nieuwe inzending een melding krijgt (via FormSubmit). */
const MELDING_EMAIL = "juliakroonen71@gmail.com";

const TYPE_NAAM: Record<InzendingType, string> = {
  lid: "Lid worden",
  auteur: "Beginnend auteur",
  contact: "Contact",
};

/** Slaat een formulierinzending op en stuurt een e-mailmelding. */
export async function verstuurInzending(inzending: Inzending) {
  const { error } = await supabase.from("inzendingen").insert(inzending);
  if (error) throw error;

  // Melding per mail; mislukt dit, dan staat de inzending toch veilig in de database.
  try {
    await fetch(`https://formsubmit.co/ajax/${MELDING_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Nieuwe inzending: ${TYPE_NAAM[inzending.type]} — Boekenclub Den Bosch`,
        _template: "table",
        _captcha: "false",
        ...(inzending.email ? { _replyto: inzending.email } : {}),
        ...inzending,
        type: TYPE_NAAM[inzending.type],
      }),
    });
  } catch {
    /* negeren */
  }
}

export function isGeldigEmail(waarde: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(waarde.trim());
}
