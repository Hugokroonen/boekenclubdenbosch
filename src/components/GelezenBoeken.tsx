import { useState } from "react";
import { Kaart } from "@/components/ui-basis";
import { KoffieBoon } from "@/components/koffie";
import { GELEZEN_BOEKEN, cijferTekst } from "@/lib/boeken";

/** Aantal boeken dat standaard zichtbaar is; de rest zit achter "Lees meer". */
const START_AANTAL = 6;

/** Cijfer-kleurwissel voor een speels geheel. */
const CIJFER_KLEUREN = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-berry text-berry-foreground",
];

export function GelezenBoeken() {
  const [allesTonen, setAllesTonen] = useState(false);
  const boeken = allesTonen ? GELEZEN_BOEKEN : GELEZEN_BOEKEN.slice(0, START_AANTAL);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {boeken.map((boek, i) => (
          <Kaart
            key={boek.titel}
            className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <KoffieBoon className="absolute -right-3 -top-3 h-12 w-12 rotate-12 text-latte/60 transition-transform duration-200 group-hover:rotate-45" />
            <div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-sm font-bold ${CIJFER_KLEUREN[i % CIJFER_KLEUREN.length]}`}
              >
                {cijferTekst(boek.cijfer)}
              </span>
              <h3 className="mt-4 text-xl text-balance-nl">{boek.titel}</h3>
            </div>
            <p className="text-sm text-muted-foreground">van {boek.auteur}</p>
          </Kaart>
        ))}
      </div>

      {GELEZEN_BOEKEN.length > START_AANTAL ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setAllesTonen((v) => !v)}
            className="inline-flex rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground"
          >
            {allesTonen ? "Toon minder" : `Lees meer (${GELEZEN_BOEKEN.length - START_AANTAL} extra)`}
          </button>
        </div>
      ) : null}
    </div>
  );
}
