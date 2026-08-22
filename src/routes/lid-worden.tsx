import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieBoon, KoffieKop } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";
import { Formulier, type Veld } from "@/components/Formulier";

import groepsfoto from "@/assets/groepsfoto.jpeg.asset.json";
import boekenCirkel from "@/assets/boeken-cirkel.jpeg.asset.json";
import austenKoffie from "@/assets/austen-koffie.jpeg.asset.json";

/* ============================================================
   TEKSTEN — LID WORDEN
   ============================================================ */
const INTRO = {
  titel: "Lid worden",
  tekst:
    "Wij zijn Boekenclub Den Bosch: een gezellige club lezers tussen de 20 en 40 jaar. We positioneren ons nadrukkelijk niet als een literaire club — bij ons is het lekker informeel. We komen altijd samen in een café (meestal bij Douwe Egberts) om samen een boek te bespreken. Gewoon vertellen wat je van het boek vond, meer niet.",
};

const TWEE_CLUBJES = {
  titel: "Twee clubjes",
  tekst:
    "We hebben twee soorten boekenclubjes: bij het ene lezen we vooral romans, bij het andere vooral thrillers. Geen fantasy, sci-fi of young adult. Samen bepalen we welk boek we lezen: iedereen draagt ideeën aan en we stemmen op de leukste.",
};

const STAPPEN = [
  "Meld je aan via het formulier.",
  "Kies je clubje: romans of thrillers.",
  "Samen kiezen we het volgende boek.",
  "Iedere 6 à 7 weken komen we samen bij Douwe Egberts om het boek te bespreken — met een lekkere koffie erbij.",
];

const LIDMAATSCHAP = [
  "Iedere 7 weken boekenclub (of 6 weken, afhankelijk van hoe snel jullie lezen 😉)",
  "Altijd een geregelde locatie — meestal Douwe Egberts, en anders zorgen we op tijd voor een leuke back-up.",
  "Promotie van de club, zodat 'ie blijft groeien en je steeds nieuwe mensen ontmoet.",
  "We werken toe naar leuke samenwerkingen, bijvoorbeeld korting op drankjes of boeken.",
  "Auteursbezoeken — wij regelen dat auteurs langskomen (inclusief hun fee en drankjes).",
  "En nog veel meer leuke activiteiten!",
];

const PRIJS_TEKST =
  "Het lidmaatschap is een jaarabonnement, maandelijks opzegbaar, van € 3,50 per maand (exclusief drankjes). Hoe we dat precies regelen bepalen we samen — heel vrijblijvend, geen gedoe vooraf.";

const ACTIVITEITEN = {
  titel: "Activiteiten",
  tekst: "We organiseren ook regelmatig leuke activiteiten.",
};

/** Velden van het aanmeldformulier — hier makkelijk aan te passen. */
const AANMELD_VELDEN: Veld[] = [
  { naam: "naam", label: "Naam", verplicht: true },
  { naam: "leeftijd", label: "Leeftijd" },
  { naam: "genres", label: "Genres die je graag leest", breed: true },
  { naam: "bericht", label: "Opmerking / notitie", type: "textarea" },
  { naam: "email", label: "E-mailadres", type: "email", verplicht: true },
];

export const Route = createFileRoute("/lid-worden")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Lid worden" },
      {
        name: "description",
        content:
          "Word lid van Boekenclub Den Bosch: informeel samen lezen, romans of thrillers, iedere 6 à 7 weken samen bij Douwe Egberts met een lekkere koffie.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Lid worden" },
      {
        property: "og:description",
        content: "Gratis & vrijblijvend aanmelden bij een gezellige boekenclub in Den Bosch.",
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
                Gratis & vrijblijvend aanmelden
              </KnopLink>
              <KnopLink to="/contact" variant="lijn">
                Neem contact op
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
          <Foto
            src={boekenCirkel.url}
            alt="Boeken van de boekenclub in een cirkel gelegd"
            ratio="aspect-[4/3]"
          />
          <div>
            <Kop sub={TWEE_CLUBJES.tekst}>{TWEE_CLUBJES.titel}</Kop>
          </div>
        </div>
      </Sectie>

      {/* HOE HET WERKT */}
      <Sectie className="bg-secondary/50">
        <Kop sub="In vier simpele stapjes zit je aan tafel.">Hoe het werkt</Kop>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
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
      </Sectie>

      {/* WAT JE KRIJGT */}
      <Sectie>
        <Kop sub="Geen ingewikkelde pakketten — dit krijg je gewoon allemaal.">
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

      {/* ACTIVITEITEN + VIDEO/REEL PLACEHOLDER */}
      <Sectie className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kop sub={ACTIVITEITEN.tekst}>{ACTIVITEITEN.titel}</Kop>
            <p className="mt-4 text-muted-foreground">
              Denk aan auteursbezoeken, borrels en spontane leesavonden — altijd met koffie.
            </p>
            <div className="mt-7">
              <KnopLink to="/contact" variant="zacht">
                Neem contact op
              </KnopLink>
            </div>
          </div>

          {/*
            PLAATSHOUDER VIDEO / REEL
            De eigenaar uploadt hier later een korte reel met achtergrondmuziek.
            Vervang dit blok dan door bijvoorbeeld:
            <video src="/reel.mp4" controls playsInline className="w-full rounded-3xl" />
          */}
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl border-4 border-dashed border-latte bg-card text-center">
            <img
              src={austenKoffie.url}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative px-6">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift">
                ▶
              </span>
              <p className="mt-4 font-display text-lg font-bold">Video / reel volgt binnenkort</p>
              <p className="text-sm text-muted-foreground">
                Plaatshouder — hier komt de reel (met achtergrondmuziek).
              </p>
            </div>
          </div>
        </div>
      </Sectie>

      {/* AANMELDFORMULIER */}
      <Sectie id="aanmelden">
        <Kop sub="Kort, simpel en vrijblijvend. We nemen daarna gewoon even contact met je op.">
          Aanmelden
        </Kop>
        <div className="mt-8">
          <Formulier
            type="lid"
            velden={AANMELD_VELDEN}
            knoptekst="Aanmelden"
            onderschrift="Gratis & vrijblijvend aanmelden"
            succestekst="Bedankt! We nemen snel contact met je op."
          />
        </div>
      </Sectie>

      <ContactCta
        titel="Nog even twijfelen?"
        tekst="Stel gerust je vraag — we bijten niet, we lezen alleen."
        primair={{ label: "Bekijk Over ons", to: "/over-ons" }}
      />
    </>
  );
}
