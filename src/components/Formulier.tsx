import { useState, type FormEvent } from "react";
import { Kaart, Knop } from "@/components/ui-basis";
import { KoffieKop } from "@/components/koffie";
import {
  isGeldigEmail,
  verstuurInzending,
  type Inzending,
  type InzendingType,
} from "@/lib/inzendingen";

export type Veld = {
  naam: keyof Inzending;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  opties?: string[];
  verplicht?: boolean;
  hint?: string;
  breed?: boolean;
};

/**
 * Eén herbruikbaar formulier voor alle drie de pagina's.
 * De velden en teksten staan per pagina in het bestand van die pagina,
 * zodat je ze daar makkelijk kunt aanpassen.
 */
export function Formulier({
  type,
  velden,
  knoptekst,
  onderschrift,
  succestekst = "Bedankt! We nemen snel contact met je op.",
  id,
}: {
  type: InzendingType;
  velden: Veld[];
  knoptekst: string;
  onderschrift?: string;
  succestekst?: string;
  id?: string;
}) {
  const [waarden, setWaarden] = useState<Record<string, string>>({});
  const [bezig, setBezig] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [fout, setFout] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  function zet(naam: string, waarde: string) {
    setWaarden((v) => ({ ...v, [naam]: waarde.slice(0, 2000) }));
  }

  async function verstuur(e: FormEvent) {
    e.preventDefault();
    setFout(null);

    // Simpele spambescherming: verborgen veld moet leeg blijven.
    if (honeypot) return;

    for (const veld of velden) {
      if (veld.verplicht && !(waarden[veld.naam] ?? "").trim()) {
        setFout(`Vul even "${veld.label}" in — dan kunnen we je bereiken.`);
        return;
      }
    }
    // E-mail alleen controleren als dit formulier een e-mailveld heeft.
    const heeftEmail = velden.some((v) => v.naam === "email");
    if (heeftEmail && !isGeldigEmail(waarden["email"] ?? "")) {
      setFout("Controleer je e-mailadres even, die lijkt niet te kloppen.");
      return;
    }

    setBezig(true);
    try {
      const inzending: Inzending = { type };
      for (const veld of velden) {
        const waarde = (waarden[veld.naam] ?? "").trim();
        if (waarde) (inzending as Record<string, string>)[veld.naam as string] = waarde;
      }
      await verstuurInzending(inzending);
      setKlaar(true);
    } catch {
      setFout("Oeps, er ging iets mis. Probeer het zo nog eens of mail ons direct.");
    } finally {
      setBezig(false);
    }
  }

  if (klaar) {
    return (
      <Kaart {...(id ? { id } : {})} className="text-center">

        <KoffieKop className="mx-auto h-14 w-14 text-primary" />
        <h3 className="mt-4 text-2xl">{succestekst}</h3>
        <p className="mt-2 text-muted-foreground">
          Zet alvast een kopje koffie — je hoort snel van ons. ☕
        </p>
      </Kaart>
    );
  }

  return (
    <Kaart className="scroll-mt-28">
      <form id={id} onSubmit={verstuur} className="grid gap-5 sm:grid-cols-2">
        {velden.map((veld) => (
          <div
            key={veld.naam as string}
            className={veld.breed || veld.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={`${type}-${veld.naam as string}`}
              className="mb-1.5 block font-display font-bold"
            >
              {veld.label}
              {!veld.verplicht ? (
                <span className="ml-1 font-body text-sm font-normal text-muted-foreground">
                  (optioneel)
                </span>
              ) : null}
            </label>

            {veld.type === "textarea" ? (
              <textarea
                id={`${type}-${veld.naam as string}`}
                rows={4}
                maxLength={2000}
                value={waarden[veld.naam] ?? ""}
                onChange={(e) => zet(veld.naam as string, e.target.value)}
                className="w-full rounded-2xl border-2 border-input bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            ) : veld.type === "select" ? (
              <select
                id={`${type}-${veld.naam as string}`}
                value={waarden[veld.naam] ?? ""}
                onChange={(e) => zet(veld.naam as string, e.target.value)}
                className="w-full rounded-2xl border-2 border-input bg-background px-4 py-3 outline-none transition focus:border-primary"
              >
                <option value="">Kies iets…</option>
                {(veld.opties ?? []).map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${type}-${veld.naam as string}`}
                type={veld.type ?? "text"}
                maxLength={200}
                value={waarden[veld.naam] ?? ""}
                onChange={(e) => zet(veld.naam as string, e.target.value)}
                className="w-full rounded-2xl border-2 border-input bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            )}
            {veld.hint ? (
              <p className="mt-1 text-sm text-muted-foreground">{veld.hint}</p>
            ) : null}
          </div>
        ))}

        {/* Spamval: onzichtbaar voor mensen */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
        />

        {fout ? (
          <p className="sm:col-span-2 rounded-2xl bg-secondary px-4 py-3 text-secondary-foreground">
            {fout}
          </p>
        ) : null}

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <Knop type="submit" disabled={bezig}>
            {bezig ? "Bezig…" : knoptekst}
          </Knop>
          {onderschrift ? (
            <span className="text-sm text-muted-foreground">{onderschrift}</span>
          ) : null}
        </div>
      </form>
    </Kaart>
  );
}
