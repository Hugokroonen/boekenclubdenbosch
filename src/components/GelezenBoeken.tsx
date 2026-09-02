import { useState } from "react";
import { Kaart } from "@/components/ui-basis";
import { GELEZEN_BOEKEN, cijferTekst } from "@/lib/boeken";

/** Aantal boeken dat standaard zichtbaar is; de rest zit achter "Lees meer". */
const START_AANTAL = 4;

export function GelezenBoeken() {
  const [allesTonen, setAllesTonen] = useState(false);
  const boeken = allesTonen ? GELEZEN_BOEKEN : GELEZEN_BOEKEN.slice(0, START_AANTAL);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {boeken.map((boek) => (
          <Kaart key={boek.titel} className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl">{boek.titel}</h3>
              <p className="mt-1 text-sm text-muted-foreground">van {boek.auteur}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
              {cijferTekst(boek.cijfer)}
            </span>
          </Kaart>
        ))}
      </div>

      {GELEZEN_BOEKEN.length > START_AANTAL ? (
        <button
          type="button"
          onClick={() => setAllesTonen((v) => !v)}
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground"
        >
          {allesTonen ? "Toon minder" : "Lees meer"}
        </button>
      ) : null}
    </div>
  );
}
