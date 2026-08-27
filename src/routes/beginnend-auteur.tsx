import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieBoon, BoekIcoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";
import { Formulier, type Veld } from "@/components/Formulier";

import koffieNaastBoek from "@/assets/koffie-naast-boek.jpeg.asset.json";
import thrillerKoffie from "@/assets/thriller-koffie.jpeg.asset.json";
import bergDieWacht from "@/assets/berg-die-wacht.jpeg.asset.json";

/* ============================================================
   TEKSTEN — BEGINNEND AUTEUR
   ============================================================ */
const INTRO = {
  titel: "Beginnend auteur",
  tekst:
    "Heb jij een boek geschreven? Supergaaf! Dan ben je vast razend benieuwd wat lezers er écht van vinden… Onze proeflezers lezen jouw boek grondig en geven je oprechte feedback.",
};

const HOE_HET_WERKT = {
  titel: "Hoe het werkt",
  tekst:
    "We lezen bij voorkeur een fysiek exemplaar. Laat ons weten of je feedback wil ontvangen op bepaalde onderdelen of dat we er juist helemaal blanco in moeten stappen. Binnen 9 weken heb je jouw feedback binnen.",
};

const PRIJS = {
  titel: "Wat kost het?",
  tekst:
    "Om jou van goede feedback te voorzien, nemen we de tijd om je boek aandachtig te lezen en een heldere review te formuleren. Daarvoor vragen we een vergoeding van € 99 (excl. btw). Daarbij is een promotie op onze Instagrampagina inbegrepen!",
};

const CTA_TEKST =
  "Heb je vragen over proeflezen? Of heb je ons eigenlijk nodig voor iets anders? Stuur gewoon een berichtje!";

/** Velden van het auteursformulier. */
const AUTEUR_VELDEN: Veld[] = [
  { naam: "naam", label: "Naam", verplicht: true },
  { naam: "email", label: "E-mailadres", type: "email", verplicht: true },
  { naam: "genres", label: "Genre", verplicht: true },
  { naam: "boek_titel", label: "Titel van het boek" },
  { naam: "aantal_paginas", label: "Aantal pagina's", verplicht: true },
  {
    naam: "boek_omschrijving",
    label: "Korte omschrijving van het boek",
    type: "textarea",
    verplicht: true,
  },
];

export const Route = createFileRoute("/beginnend-auteur")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Beginnend auteur" },
      {
        name: "description",
        content:
          "Laat je boek proeflezen door echte lezers van Boekenclub Den Bosch. Oprechte feedback binnen 9 weken, inclusief promotie op onze Instagrampagina.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Beginnend auteur" },
      {
        property: "og:description",
        content: "Proeflezen door echte lezers: oprechte feedback op jouw boek.",
      },
    ],
  }),
  component: BeginnendAuteur,
});

function BeginnendAuteur() {
  return (
    <>
      <Sectie className="bg-koffiedots">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Label>
              <BoekIcoon className="h-4 w-4 text-primary" />
              Proeflezen door echte lezers
            </Label>
            <h1 className="mt-5 text-4xl text-balance-nl sm:text-5xl">{INTRO.titel}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{INTRO.tekst}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <KnopLink to="/beginnend-auteur" hash="auteursformulier">
                Boek insturen
              </KnopLink>
            </div>
          </div>
          <Foto
            src={koffieNaastBoek.url}
            alt="Een kop koffie naast een opengeslagen boek op een houten tafel"
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <BonenDivider />

      <Sectie>
        <div className="grid gap-8 md:grid-cols-2">
          <Kaart>
            <KoffieBoon className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-2xl">{HOE_HET_WERKT.titel}</h2>
            <p className="mt-2 text-muted-foreground">{HOE_HET_WERKT.tekst}</p>
          </Kaart>
          <Kaart className="bg-cream">
            <KoffieBoon className="h-7 w-7 text-accent" />
            <h2 className="mt-4 text-2xl">{PRIJS.titel}</h2>
            <p className="mt-2 text-muted-foreground">{PRIJS.tekst}</p>
          </Kaart>
        </div>
      </Sectie>

      <Sectie className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Foto
            src={bergDieWacht.url}
            alt="De roman Ik ken een berg die op me wacht naast een opengeslagen boek"
            ratio="aspect-[4/3]"
          />
          <div>
            <Kop sub={CTA_TEKST}>Even sparren?</Kop>
            <div className="mt-7 flex flex-wrap gap-4">
              <KnopLink to="/contact">Contact opnemen</KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      <Sectie id="auteursformulier">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Kop sub="Vertel kort iets over je boek, dan laten we je snel weten wat mogelijk is.">
              Boek insturen
            </Kop>
            <div className="mt-8">
              <Formulier
                type="auteur"
                velden={AUTEUR_VELDEN}
                knoptekst="Verstuur"
                succestekst="Bedankt! We nemen snel contact met je op."
              />
            </div>
          </div>
          <Foto
            src={thrillerKoffie.url}
            alt="Thriller naast een cappuccino op een cafétafel"
            ratio="aspect-[3/4]"
            className="hidden lg:block"
          />
        </div>
      </Sectie>

      <ContactCta
        titel="Nog vragen over proeflezen?"
        tekst="Stel ze gerust!"
        primair={{ label: "Over ons", to: "/over-ons" }}
      />
    </>
  );
}
