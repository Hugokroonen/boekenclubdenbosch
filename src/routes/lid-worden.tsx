import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieBoon, KoffieKop } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";
import { Formulier, type Veld } from "@/components/Formulier";

import groepsfoto from "@/assets/groepsfoto.jpeg.asset.json";
import talesFromTheCafe from "@/assets/tales-from-the-cafe.jpeg.asset.json";
import thrillersTafel from "@/assets/thrillers-tafel.jpeg.asset.json";
import douweEgberts from "@/assets/douwe-egberts-pand.jpeg.asset.json";
import boekenCollage from "@/assets/boeken-collage.jpeg.asset.json";

/* ============================================================
   TEKSTEN — LID WORDEN
   ============================================================ */
const INTRO = {
  titel: "Lid worden",
  tekst:
    "Wij zijn Boekenclub Den Bosch: een groep meiden tussen de 20-40 jaar die houdt van lezen! Iedere 7 weken komen we bij Douwe Egberts samen om het nieuwe boek te bespreken. En ja, soms schuift er ook een auteur aan.",
};

const TWEE_CLUBJES = {
  titel: "Twee clubjes",
  tekst:
    "Vanwege de hoge populariteit hebben we inmiddels twee clubjes opgericht. Eén leest vooral romans, het andere vooral thrillers. Geen fantasy, sci-fi of young adult. Samen bepalen we welk boek we gaan lezen: iedereen stuurt zijn idee in en vervolgens gaan we stemmen!",
};

const STAPPEN = [
  "Meld je aan via het formulier.",
  "Laat ons weten welk genre je het liefst leest voor een goede match",
  "Kom bij de eerstvolgende editie vrijblijvend meekletsen, sfeer (en lekkere koffie) proeven",
  "Laat ons weten of je definitief aan wil haken, dan zien we je na 7 weken weer bij Douwe Egberts! Misschien zelfs met het boek dat jij hebt uitgekozen. 😊",
];

const LIDMAATSCHAP = [
  "Iedere 7 à 8 weken boekenclub",
  "Promotie van de club, zodat 'ie blijft groeien en je steeds nieuwe mensen ontmoet.",
  "Auteursbezoeken: Thomas Olde Heuvelt en Alexander Colin hebben al met ons koffiegedronken!",
  "Leuke activiteiten, zoals samen op het strand lezen of boekenbios!",
];

const PRIJS_TEKST =
  "Het lidmaatschap is een jaarabonnement van € 3,50 per maand. Dankzij jouw bijdrage kunnen wij bovenstaand ieder jaar weer opnieuw organiseren!";

/**
 * Boeken die we al gelezen hebben, met het cijfer dat de club gaf.
 * Zodra de foto's per boek er zijn, kun je hieronder een `foto` toevoegen.
 */
const GELEZEN_BOEKEN: { titel: string; cijfer: string }[] = [
  { titel: "Het laatste verhaal van Jamie Gunn", cijfer: "—" },
  { titel: "Het laatste slachtoffer", cijfer: "—" },
  { titel: "Tales from the café", cijfer: "—" },
];

/** Velden van het aanmeldformulier — hier makkelijk aan te passen. */
const AANMELD_VELDEN: Veld[] = [
  { naam: "voornaam", label: "Voornaam", verplicht: true },
  { naam: "achternaam", label: "Achternaam", verplicht: true },
  { naam: "telefoon", label: "Telefoonnummer", verplicht: true },
  { naam: "leeftijd", label: "Leeftijd", verplicht: true },
  { naam: "genres", label: "Genres die je graag leest", breed: true },
  { naam: "bericht", label: "Opmerking / notitie", type: "textarea" },
];

export const Route = createFileRoute("/lid-worden")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Lid worden" },
      {
        name: "description",
        content:
          "Word lid van Boekenclub Den Bosch: informeel samen lezen, romans of thrillers, iedere 7 weken samen bij Douwe Egberts met een lekkere koffie.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Lid worden" },
      {
        property: "og:description",
        content: "Sluit je aan bij de meiden van Boekenclub Den Bosch.",
      },
    ],
  }),
  component: LidWorden,
});

function LidWorden() {
  return (
    <>
      <Sectie className="bg-koffiedots">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Label>
              <KoffieKop className="h-4 w-4 text-primary" />
              Laagdrempelig & gezellig
            </Label>
            <h1 className="mt-5 text-4xl text-balance-nl sm:text-5xl">{INTRO.titel}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{INTRO.tekst}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <KnopLink to="/lid-worden" hash="aanmelden">
                Aanmelden
              </KnopLink>
            </div>
          </div>
          <Foto
            src={groepsfoto.url}
            alt="Leden van Boekenclub Den Bosch met hun boeken in het café"
            ratio="aspect-[4/3]"
          />
        </div>
      </Sectie>

      <BonenDivider />

      {/* TWEE CLUBJES */}
      <Sectie>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Foto
              src={talesFromTheCafe.url}
              alt="De boeken Voordat de warmte verdwijnt en Tales from the café met twee cappuccino's"
              ratio="aspect-[3/4]"
            />
            <Foto
              src={thrillersTafel.url}
              alt="Thrillers op tafel in het café, klaar om besproken te worden"
              ratio="aspect-[3/4]"
              className="mt-8"
            />
          </div>
          <div>
            <Kop sub={TWEE_CLUBJES.tekst}>{TWEE_CLUBJES.titel}</Kop>
          </div>
        </div>
      </Sectie>

      {/* HOE HET WERKT */}
      <Sectie className="bg-secondary/50">
        <Kop sub="In vier simpele stapjes zit je bij ons.">Hoe het werkt</Kop>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ol className="grid gap-5">
            {STAPPEN.map((stap, i) => (
              <li key={stap}>
                <Kaart className="flex h-full items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-1.5">{stap}</p>
                </Kaart>
              </li>
            ))}
          </ol>
          <Foto
            src={douweEgberts.url}
            alt="Het Douwe Egberts café in Den Bosch waar de boekenclub samenkomt"
            bijschrift="Ons vaste stekje"
            ratio="aspect-[3/4]"
          />
        </div>
      </Sectie>

      {/* WAT JE KRIJGT */}
      <Sectie>
        <Kop sub="Een community voor echte boekenliefhebbers!">
          Wat je krijgt bij je lidmaatschap
        </Kop>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {LIDMAATSCHAP.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-3xl bg-card p-5 shadow-soft">
              <KoffieBoon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Kaart className="mt-8 border-2 border-dashed border-latte bg-cream">
          <h3 className="text-2xl">En het lidmaatschap zelf?</h3>
          <p className="mt-2 text-muted-foreground">{PRIJS_TEKST}</p>
        </Kaart>
      </Sectie>

      {/* DIT HEBBEN WE AL GELEZEN */}
      <Sectie className="bg-secondary/50">
        <Kop sub="Deze boeken hebben we al gelezen — en dit was het cijfer. De foto's per boek volgen nog.">
          Dit hebben we al gelezen
        </Kop>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GELEZEN_BOEKEN.map((boek) => (
            <Kaart key={boek.titel} className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl">{boek.titel}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Cijfer van de club</p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
                {boek.cijfer}
              </span>
            </Kaart>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Foto
            src={boekenCollage.url}
            alt="Collage van de boeken die de boekenclub het afgelopen jaar las"
            ratio="aspect-[4/3]"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg text-muted-foreground">
              Iedere editie kiezen we samen een nieuw boek — en aan het eind van het jaar maken we
              er een mooie wrapped van.
            </p>
            <div className="mt-6">
              <KnopLink to="/lid-worden" hash="aanmelden">
                Aanmelden
              </KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      {/* AANMELDFORMULIER */}
      <Sectie id="aanmelden">
        <Kop sub="Vul het formulier in, dan nemen we snel contact met je op">Aanmelden</Kop>
        <div className="mt-8">
          <Formulier
            type="lid"
            velden={AANMELD_VELDEN}
            knoptekst="Aanmelden"
            succestekst="Bedankt! We nemen snel contact met je op."
          />
        </div>
      </Sectie>

      <ContactCta
        titel="Twijfel je nog?"
        tekst="Stuur ons een berichtje of volg ons een tijdje op Instagram!"
        primair={null}
        instagram
      />
    </>
  );
}
