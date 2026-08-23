import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { KoffieKop } from "@/components/koffie";
import { Formulier, type Veld } from "@/components/Formulier";

import eigenaarPortret from "@/assets/eigenaar-portret.jpeg.asset.json";
import koffieBoekenlegger from "@/assets/koffie-boekenlegger.jpeg.asset.json";

/* ============================================================
   TEKSTEN — CONTACT
   ============================================================ */
const CONTACT = {
  titel: "Contact",
  tekst: "We zijn heel benaderbaar — je hoort snel van ons!",
  intro:
    "Lid worden, samenwerken of gewoon een vraag? Stuur een berichtje, dan reageren we zo snel mogelijk.",
};

/** Velden van het algemene contactformulier. */
const CONTACT_VELDEN: Veld[] = [
  { naam: "naam", label: "Naam", verplicht: true },
  { naam: "email", label: "E-mailadres", type: "email", verplicht: true },
  {
    naam: "interesse",
    label: "Ik ben geïnteresseerd in",
    type: "select",
    opties: ["Lid worden", "Samenwerking", "Anders"],
  },
  { naam: "samenwerking", label: "Wat voor samenwerking?", hint: "Alleen invullen bij een samenwerking." },
  { naam: "bericht", label: "Bericht / opmerking", type: "textarea" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Contact" },
      {
        name: "description",
        content:
          "Neem contact op met Boekenclub Den Bosch: lid worden, samenwerken of gewoon een vraag. We zijn heel benaderbaar en reageren snel.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Contact" },
      {
        property: "og:description",
        content: "Stuur ons een berichtje — we zijn heel benaderbaar.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Sectie className="bg-koffiedots">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Label>
              <KoffieKop className="h-4 w-4 text-primary" />
              {CONTACT.tekst}
            </Label>
            <h1 className="mt-5 text-4xl text-balance-nl sm:text-5xl">{CONTACT.titel}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{CONTACT.intro}</p>

            <div className="mt-8">
              <Formulier
                type="contact"
                velden={CONTACT_VELDEN}
                knoptekst="Verstuur"
                succestekst="Bedankt! We nemen snel contact met je op."
              />
            </div>
          </div>

          <div className="grid gap-6">
            <Foto
              src={eigenaarPortret.url}
              alt="De oprichter van Boekenclub Den Bosch"
              bijschrift="Je krijgt gewoon antwoord van een mens, geen standaardmailtje."
              ratio="aspect-[4/5]"
            />
            <Foto
              src={koffieBoekenlegger.url}
              alt="Cappuccino met een boekenlegger op tafel"
              ratio="aspect-[4/3]"
              className="hidden lg:block"
            />
            <div className="flex flex-wrap gap-3">
              <KnopLink to="/lid-worden" variant="zacht">
                Word lid
              </KnopLink>
              <KnopLink to="/samenwerkingen" variant="zacht">
                Samenwerken
              </KnopLink>
            </div>
          </div>
        </div>
      </Sectie>
    </>
  );
}
