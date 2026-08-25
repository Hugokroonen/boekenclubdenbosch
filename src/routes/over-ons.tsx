import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Sectie, Kop, Foto, Label, Kaart } from "@/components/ui-basis";
import { BonenDivider, KoffieKop, KoffieBoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";

import groepsfoto from "@/assets/groepsfoto.jpeg.asset.json";
import koffieZeepaardje from "@/assets/koffie-zeepaardje.jpeg.asset.json";
import tweeLattes from "@/assets/twee-lattes.jpeg.asset.json";
import latteBoek from "@/assets/latte-boek.jpeg.asset.json";

/* ============================================================
   TEKSTEN — OVER ONS
   ============================================================ */
const OVER_ONS = {
  titel: "Over ons",
  tekst:
    "Boekenclub Den Bosch is ontstaan vanuit liefde voor lezen, koffie én Den Bosch. Want hoe leuk is het om jouw loeiharde kritiek of lofzang met iemand te delen en die daar nog een schepje bovenop doet?",
};

const WAAROM = [
  "Lezen is leuker als je er samen over praat.",
  "Iedereen is welkom, je hoeft niet literair te zijn. 😅",
  "Een boek is de beste ijsbreker om nieuwe meiden in Den Bosch te ontmoeten!",
];

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Over ons" },
      {
        name: "description",
        content:
          "Wie zijn wij? Boekenclub Den Bosch is ontstaan vanuit liefde voor lezen, koffie én Den Bosch. Informeel samen lezen met andere gezellige meiden.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Over ons" },
      {
        property: "og:description",
        content: "Ontstaan vanuit liefde voor lezen, koffie én Den Bosch.",
      },
    ],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <>
      <Sectie className="bg-koffiedots">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Label>
              <KoffieKop className="h-4 w-4 text-primary" />
              Even voorstellen
            </Label>
            <h1 className="mt-5 text-4xl text-balance-nl sm:text-5xl">{OVER_ONS.titel}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{OVER_ONS.tekst}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <KnopLink to="/lid-worden" hash="aanmelden">
                Aanmelden
              </KnopLink>
              <KnopLink to="/contact" variant="lijn">
                Neem contact op
              </KnopLink>
            </div>
          </div>
          <Foto
            src={groepsfoto.url}
            alt="Groepsfoto van de leden van Boekenclub Den Bosch"
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <BonenDivider />

      <Sectie>
        <Kop sub="Ontdek wie we zijn en wat we doen!">Dit zijn wij</Kop>
        {/* Hier komen straks de reels (o.a. EenVandaag en het lezen op het strand). */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Foto
            src={tweeLattes.url}
            alt="Twee koffies en twee boeken op tafel bij de boekenclub"
            ratio="aspect-[3/4]"
          />
          <Foto
            src={latteBoek.url}
            alt="Menukaart met koffie naast een roman"
            ratio="aspect-[3/4]"
            className="md:mt-8"
          />
          <Foto
            src={koffieZeepaardje.url}
            alt="Cappuccino met latte art naast twee romans"
            ratio="aspect-[3/4]"
          />
        </div>
      </Sectie>

      <Sectie className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kop sub="Waarom we dit doen">Lezen verbindt</Kop>
            <ul className="mt-6 grid gap-4">
              {WAAROM.map((r) => (
                <li key={r}>
                  <Kaart className="flex items-start gap-3 p-5">
                    <KoffieBoon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{r}</span>
                  </Kaart>
                </li>
              ))}
            </ul>
          </div>
          <Foto
            src={groepsfoto.url}
            alt="De boekenclub samen in het café in Den Bosch"
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <ContactCta
        titel="Zin om een keer aan te schuiven?"
        tekst="Kom gezellig langs bij de volgende editie!"
      />
    </>
  );
}
