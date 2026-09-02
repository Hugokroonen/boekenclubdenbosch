import { useEffect, useState } from "react";
import { GELEZEN_BOEKEN, cijferTekst } from "@/lib/boeken";
import { KoffieBoon } from "@/components/koffie";

/**
 * "Wrapped" — een klikbare slideshow van de boeken die we gelezen hebben.
 * Speelt vanzelf door; klikken op de kaart of de bolletjes gaat naar de volgende slide.
 */
const INTERVAL_MS = 4000;

const SLIDE_KLEUREN = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-berry text-berry-foreground",
];

export function Wrapped() {
  const [index, setIndex] = useState(0);
  const [speelt, setSpeelt] = useState(true);
  const totaal = GELEZEN_BOEKEN.length;

  useEffect(() => {
    if (!speelt) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % totaal), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [speelt, totaal]);

  const boek = GELEZEN_BOEKEN[index]!;
  const kleur = SLIDE_KLEUREN[index % SLIDE_KLEUREN.length]!;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setSpeelt(false);
          setIndex((i) => (i + 1) % totaal);
        }}
        className={`flex min-h-[18rem] w-full flex-col justify-between rounded-3xl p-8 text-left shadow-lift transition-colors duration-500 ${kleur}`}
        aria-label="Volgende slide"
      >
        <span className="inline-flex items-center gap-2 font-display font-bold">
          <KoffieBoon className="h-5 w-5" />
          Onze wrapped · {index + 1}/{totaal}
        </span>
        <span>
          <span className="block font-display text-4xl font-bold text-balance-nl sm:text-5xl">
            {boek.titel}
          </span>
          <span className="mt-2 block text-lg opacity-90">van {boek.auteur}</span>
        </span>
        <span className="mt-6 flex items-end justify-between gap-4">
          <span className="text-sm opacity-90">Klik voor de volgende slide</span>
          <span className="font-display text-5xl font-bold">{cijferTekst(boek.cijfer)}</span>
        </span>
      </button>

      <div className="mt-4 flex flex-wrap gap-2">
        {GELEZEN_BOEKEN.map((b, i) => (
          <button
            key={b.titel}
            type="button"
            aria-label={`Ga naar ${b.titel}`}
            onClick={() => {
              setSpeelt(false);
              setIndex(i);
            }}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-primary" : "bg-latte"}`}
          />
        ))}
      </div>
    </div>
  );
}
