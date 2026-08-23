import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieBoon, BoekIcoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";
import { Formulier, type Veld } from "@/components/Formulier";

import boekKoffie from "@/assets/boek-koffie.jpeg.asset.json";
import thrillerKoffie from "@/assets/thriller-koffie.jpeg.asset.json";
import eigenaarAuteur from "@/assets/eigenaar-auteur.jpeg.asset.json";

/* ============================================================
   TEKSTEN — BEGINNEND AUTEUR
   ============================================================ */
const INTRO = {
  titel: "Beginnend auteur",
  tekst:
    "Heb jij zelf een manuscript of boek geschreven dat nog niet is uitgegeven, en ben je benieuwd naar de eerlijke, ongefilterde mening van échte lezers? Dan ben je bij onze boekenclub aan het juiste adres. Wij lezen jouw boek graag proef en geven je oprechte feedback.",
};

const HOE_HET_WERKT = {
  titel: "Hoe het werkt",
  tekst:
    "We lezen bij voorkeur een fysiek exemplaar, maar dat is geen must — laat het ons weten wat handig is. Na het lezen delen we onze eerlijke mening met je.",
};

const PRIJS = {
  titel: "Wat kost het?",
  tekst:
    "Proeflezen kost € 99 (exclusief btw) — een vriendelijke introductieprijs. Proeflezen kost onze lezers al gauw zo'n 7 uur van hun tijd, dus dit is echt geen verdienmodel maar een eerlijke vergoeding. Eventueel bepalen we de prijs op basis van het aantal woorden.",
};

const CTA_TEKST =
  "Neem contact op via het formulier — ook als je nog vragen hebt. We staan altijd voor je klaar, geen gedoe.";

/** Velden van het auteursformulier. */
const AUTEUR_VELDEN: Veld[] = [
  { naam: "naam", label: "Naam", verplicht: true },
  { naam: "email", label: "E-mailadres", type: "email", verplicht: true },
  { naam: "genres", label: "Genre" },
  { naam: "boek_titel", label: "Titel van het boek" },
  { naam: "aantal_paginas", label: "Aantal pagina's" },
  { naam: "boek_omschrijving", label: "Korte omschrijving van het boek", type: "textarea" },
];

export const Route = createFileRoute("/beginnend-auteur")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Beginnend auteur" },
      {
        name: "description",
        content:
          "Laat je manuscript proeflezen door echte lezers van Boekenclub Den Bosch. Eerlijke, ongefilterde feedback op je boek — laagdrempelig en persoonlijk.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Beginnend auteur" },
      {
        property: "og:description",
        content: "Proeflezen door echte lezers: eerlijke feedback op jouw manuscript.",
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
                Stuur je boek in
              </KnopLink>
              <KnopLink to="/contact" variant="lijn">
                Neem contact op
              </KnopLink>
            </div>
          </div>
          <Foto
            src={boekKoffie.url}
            alt="Een boek en een cappuccino op tafel"
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
            src={eigenaarAuteur.url}
            alt="Persoonlijk contact met een auteur bij de boekenclub"
            ratio="aspect-[4/3]"
          />
          <div>
            <Kop sub={CTA_TEKST}>Even sparren? Graag!</Kop>
            <div className="mt-7 flex flex-wrap gap-4">
              <KnopLink to="/beginnend-auteur" hash="auteursformulier">
                Naar het formulier
              </KnopLink>
              <KnopLink to="/contact" variant="zacht">
                Neem contact op
              </KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      <Sectie id="auteursformulier">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Kop sub="Vertel kort iets over je boek, dan laten we je snel weten wat mogelijk is.">
              Formulier voor beginnend auteur
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
        tekst="Stel ze gerust — we denken graag met je mee."
        primair={{ label: "Over ons", to: "/over-ons" }}
      />
    </>
  );
}
