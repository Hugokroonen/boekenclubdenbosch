import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Knop, Kaart, Sectie } from "@/components/ui-basis";
import { KoffieKop } from "@/components/koffie";

/* ============================================================
   GEHEIME BEHEERPAGINA — /beheer
   Niet zichtbaar in menu of footer, en niet indexeerbaar.
   ============================================================ */

type Rij = {
  id: string;
  type: string;
  created_at: string;
  naam: string | null;
  voornaam: string | null;
  achternaam: string | null;
  email: string | null;
  telefoon: string | null;
  leeftijd: string | null;
  genres: string | null;
  boek_titel: string | null;
  boek_omschrijving: string | null;
  aantal_paginas: string | null;
  interesse: string | null;
  samenwerking: string | null;
  bericht: string | null;
};

export const Route = createFileRoute("/beheer")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Beheer" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Besloten pagina." },
    ],
  }),
  component: Beheer,
});

function Beheer() {
  const [session, setSession] = useState<Session | null>(null);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setGeladen(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!geladen) {
    return (
      <Sectie>
        <p className="text-muted-foreground">Even laden…</p>
      </Sectie>
    );
  }

  return session ? <Overzicht /> : <Inloggen />;
}

/* ---------------- Inloggen ---------------- */

function Inloggen() {
  const [modus, setModus] = useState<"in" | "aan">("in");
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [bezig, setBezig] = useState(false);
  const [melding, setMelding] = useState<string | null>(null);
  const [fout, setFout] = useState<string | null>(null);

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    setBezig(true);
    setFout(null);
    setMelding(null);
    try {
      if (modus === "in") {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: wachtwoord,
        });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: wachtwoord,
          options: { emailRedirectTo: `${window.location.origin}/beheer` },
        });
        if (error) throw error;
        if (!data.session) {
          setMelding(
            "Bijna klaar! Je krijgt een mailtje om je account te bevestigen. Klik op de link en kom daarna hier terug.",
          );
        }
      }
    } catch (err) {
      const boodschap = err instanceof Error ? err.message : "Er ging iets mis.";
      setFout(
        boodschap.toLowerCase().includes("invalid login")
          ? "E-mailadres of wachtwoord klopt niet."
          : boodschap,
      );
    } finally {
      setBezig(false);
    }
  }

  return (
    <Sectie className="bg-koffiedots">
      <div className="mx-auto max-w-md">
        <Kaart>
          <div className="flex items-center gap-3">
            <KoffieKop className="h-7 w-7 text-primary" />
            <h1 className="text-2xl">Beheer</h1>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {modus === "in"
              ? "Log in om de inzendingen te bekijken."
              : "Maak eenmalig een beheerdersaccount aan."}
          </p>

          <form onSubmit={verstuur} className="mt-6 space-y-4">
            <div>
              <label htmlFor="beheer-email" className="mb-1 block text-sm font-bold">
                E-mailadres
              </label>
              <input
                id="beheer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="beheer-ww" className="mb-1 block text-sm font-bold">
                Wachtwoord
              </label>
              <input
                id="beheer-ww"
                type="password"
                required
                minLength={8}
                value={wachtwoord}
                onChange={(e) => setWachtwoord(e.target.value)}
                autoComplete={modus === "in" ? "current-password" : "new-password"}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {fout ? <p className="text-sm text-destructive">{fout}</p> : null}
            {melding ? <p className="text-sm text-primary">{melding}</p> : null}

            <Knop type="submit" disabled={bezig} className="w-full">
              {bezig ? "Momentje…" : modus === "in" ? "Inloggen" : "Account aanmaken"}
            </Knop>
          </form>

          <button
            type="button"
            onClick={() => {
              setModus(modus === "in" ? "aan" : "in");
              setFout(null);
              setMelding(null);
            }}
            className="mt-5 w-full text-sm text-muted-foreground underline underline-offset-4"
          >
            {modus === "in"
              ? "Nog geen account? Maak er eentje aan"
              : "Ik heb al een account — inloggen"}
          </button>
        </Kaart>
      </div>
    </Sectie>
  );
}

/* ---------------- Overzicht ---------------- */

const TYPE_LABEL: Record<string, string> = {
  contact: "Contact",
  lid: "Lid worden",
  auteur: "Beginnend auteur",
  samenwerking: "Samenwerking",
};

function Overzicht() {
  const [rijen, setRijen] = useState<Rij[] | null>(null);
  const [fout, setFout] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("alles");

  const laden = useCallback(async () => {
    const { data, error } = await supabase
      .from("inzendingen")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      setFout(error.message);
      setRijen([]);
      return;
    }
    setFout(null);
    setRijen((data ?? []) as Rij[]);
  }, []);

  useEffect(() => {
    void laden();
  }, [laden]);

  async function uitloggen() {
    await supabase.auth.signOut();
  }

  async function verwijder(id: string) {
    if (!window.confirm("Deze inzending definitief verwijderen?")) return;
    const { error } = await supabase.from("inzendingen").delete().eq("id", id);
    if (error) {
      setFout(error.message);
      return;
    }
    setRijen((huidig) => (huidig ?? []).filter((r) => r.id !== id));
  }

  const zichtbaar = (rijen ?? []).filter((r) => filter === "alles" || r.type === filter);
  const soorten = Array.from(new Set((rijen ?? []).map((r) => r.type)));

  return (
    <Sectie>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <KoffieKop className="h-7 w-7 text-primary" />
          <h1 className="text-3xl">Inzendingen</h1>
        </div>
        <div className="flex gap-3">
          <Knop variant="zacht" onClick={() => void laden()}>
            Vernieuwen
          </Knop>
          <Knop variant="lijn" onClick={() => void uitloggen()}>
            Uitloggen
          </Knop>
        </div>
      </div>

      {soorten.length > 1 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {["alles", ...soorten].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-1.5 font-display text-sm font-bold transition-colors ${
                filter === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {s === "alles" ? "Alles" : (TYPE_LABEL[s] ?? s)}
            </button>
          ))}
        </div>
      ) : null}

      {fout ? (
        <p className="mt-6 text-sm text-destructive">
          Geen toegang of iets ging mis: {fout}
        </p>
      ) : null}

      {rijen === null ? (
        <p className="mt-8 text-muted-foreground">Even laden…</p>
      ) : zichtbaar.length === 0 ? (
        <p className="mt-8 text-muted-foreground">Nog geen inzendingen.</p>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {zichtbaar.map((r) => (
            <RijKaart key={r.id} rij={r} onVerwijder={() => void verwijder(r.id)} />
          ))}
        </div>
      )}
    </Sectie>
  );
}

function RijKaart({ rij, onVerwijder }: { rij: Rij; onVerwijder: () => void }) {
  const naam =
    [rij.voornaam, rij.achternaam].filter(Boolean).join(" ") || rij.naam || "Onbekend";
  const datum = new Date(rij.created_at).toLocaleString("nl-NL", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const velden: Array<[string, string | null]> = [
    ["Leeftijd", rij.leeftijd],
    ["Genres", rij.genres],
    ["Boektitel", rij.boek_titel],
    ["Over het boek", rij.boek_omschrijving],
    ["Aantal pagina's", rij.aantal_paginas],
    ["Interesse", rij.interesse],
    ["Samenwerking", rij.samenwerking],
    ["Bericht", rij.bericht],
  ];

  return (
    <Kaart>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-bold">{naam}</p>
          <p className="text-sm text-muted-foreground">{datum}</p>
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 font-display text-xs font-bold text-secondary-foreground">
          {TYPE_LABEL[rij.type] ?? rij.type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {rij.email ? (
          <a className="text-primary underline underline-offset-4" href={`mailto:${rij.email}`}>
            {rij.email}
          </a>
        ) : null}
        {rij.telefoon ? (
          <a className="text-primary underline underline-offset-4" href={`tel:${rij.telefoon}`}>
            {rij.telefoon}
          </a>
        ) : null}
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        {velden
          .filter(([, waarde]) => waarde && waarde.trim() !== "")
          .map(([label, waarde]) => (
            <div key={label}>
              <dt className="font-bold">{label}</dt>
              <dd className="whitespace-pre-wrap text-muted-foreground">{waarde}</dd>
            </div>
          ))}
      </dl>

      <button
        type="button"
        onClick={onVerwijder}
        className="mt-5 text-sm text-muted-foreground underline underline-offset-4 hover:text-destructive"
      >
        Verwijderen
      </button>
    </Kaart>
  );
}
