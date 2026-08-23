import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Sectie, Kop, Foto, Label, Kaart } from "@/components/ui-basis";
import { BonenDivider, KoffieKop, KoffieBoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";

import eigenaarPortret from "@/assets/eigenaar-portret.jpeg.asset.json";
import groepsfoto from "@/assets/groepsfoto.jpeg.asset.json";
import auteursbezoek from "@/assets/auteursbezoek.jpeg.asset.json";
import koffieZeepaardje from "@/assets/koffie-zeepaardje.jpeg.asset.json";
import latteBoek from "@/assets/latte-boek.jpeg.asset.json";

/* ============================================================
   TEKSTEN — OVER ONS
   ============================================================ */
const OVER_ONS = {
  titel: "Over ons",
  tekst:
    "Boekenclub Den Bosch is ontstaan uit een simpele liefde voor lezen en gezelligheid. Iedere paar weken komen we samen in een gezellig café om samen een boek te bespreken — informeel, laagdrempelig en altijd met een lekkere koffie erbij. Geen literaire verplichtingen, gewoon lezers die het leuk vinden om ideeën en verhalen te delen.",
};

const WAAROM = [
  "Lezen is leuker als je erover kunt praten.",
  "Iedereen is welkom — je hoeft geen literatuurkenner te zijn.",
  "Nieuwe mensen ontmoeten gaat vanzelf met een kop koffie erbij.",
];

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Over ons" },
      {
        name: "description",
        content:
          "Wie zijn wij? Boekenclub Den Bosch is een informele club lezers die iedere paar weken samenkomt in een gezellig café met een lekkere koffie.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Over ons" },
      {
        property: "og:description",
        content: "Ontstaan uit liefde voor lezen en gezelligheid. Geen literaire verplichtingen.",
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
              <KnopLink to="/lid-worden">Word lid</KnopLink>
              <KnopLink to="/contact" variant="lijn">
                Neem contact op
              </KnopLink>
            </div>
          </div>
          <Foto
            src={eigenaarPortret.url}
            alt="De oprichter van Boekenclub Den Bosch met een auteur"
            bijschrift="Achter de club zit gewoon een enthousiaste lezer."
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <BonenDivider />

      <Sectie>
        <Kop sub="Onze club in een paar beelden.">Dit zijn wij</Kop>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Foto
            src={groepsfoto.url}
            alt="Groepsfoto van de leden van Boekenclub Den Bosch"
            ratio="aspect-[3/4]"
          />
          <Foto
            src={auteursbezoek.url}
            alt="Een auteur signeert boeken tijdens een clubavond"
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
            src={latteBoek.url}
            alt="Menukaart met koffie naast een roman"
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <ContactCta
        titel="Zin om een keer aan te schuiven?"
        tekst="Kom gewoon langs bij de volgende afspraak — je hoeft niks te kunnen, alleen te lezen."
      />
    </>
  );
}
