import { createFileRoute } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieKop, BoekIcoon, KoffieBoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";

import douweEgberts from "@/assets/douwe-egberts-pand.jpeg.asset.json";
import geheugenpolitie from "@/assets/geheugenpolitie-winkel.jpeg.asset.json";
import gewetenloos from "@/assets/gewetenloos.jpeg.asset.json";

/* ============================================================
   TEKSTEN — SAMENWERKINGEN
   ============================================================ */
const INTRO = {
  titel: "Samenwerkingen",
  tekst:
    "Lokale betrokkenheid vinden wij ontzettend belangrijk. Daarom komen we het liefst samen in een zaak van een Bossche ondernemer en scoren we onze boeken bij een lokale boekhandel. Help jij ons daarbij?",
};

const KOFFIEZAKEN = {
  titel: "Voor koffiezaken",
  tekst:
    "Onze club telt 20+ leden en blijft groeien. Iedere 4 weken komen we samen in een café om over boeken te praten. Word jij ons vaste stekje? Dan is jouw horecazaak structureel gevuld met 10 koffieleuten. En there's more: elke keer als wij langs zijn geweest, wordt jouw koffiezaak gepromoot op onze Instagrampagina.",
};

const BOEKHANDELS = {
  titel: "Voor boekhandels",
  tekst:
    "Bij ons leest 20+ man tegelijkertijd hetzelfde boek. De een scoort 'm op Bol.com, de ander via Vinted. Maar we kunnen het ook met z'n allen bij jou inkopen! Zo ontvangt jouw boekhandel structureel iedere 4 weken een bestelling van circa 10 boeken. En dat aantal zal de komende tijd alleen maar oplopen, want we blijven groeien!",
};

const OVERIG = {
  titel: "Overige samenwerkingen",
  tekst:
    "Heb je een andere samenwerking in gedachten? Of ben je auteur en wil je eens aansluiten? Stuur ons een berichtje!",
};

export const Route = createFileRoute("/samenwerkingen")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Samenwerkingen" },
      {
        name: "description",
        content:
          "Koffiezaak of boekhandel in Den Bosch? Boekenclub Den Bosch werkt graag lokaal samen: iedere 7 weken 10+ lezers over de vloer en gratis promotie op Instagram.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Samenwerkingen" },
      {
        property: "og:description",
        content: "Lokale betrokkenheid: samenwerken met koffiezaken en boekhandels in Den Bosch.",
      },
    ],
  }),
  component: Samenwerkingen,
});

function Samenwerkingen() {
  return (
    <>
      <Sectie className="bg-koffiedots">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Label>
              <KoffieBoon className="h-4 w-4 text-primary" />
              Lokaal & betrokken
            </Label>
            <h1 className="mt-5 text-4xl text-balance-nl sm:text-5xl">{INTRO.titel}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{INTRO.tekst}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <KnopLink to="/contact">Neem contact op</KnopLink>
            </div>
          </div>
          <Foto
            src={douweEgberts.url}
            alt="Het Douwe Egberts café in het centrum van Den Bosch"
            ratio="aspect-[4/5]"
          />
        </div>
      </Sectie>

      <BonenDivider />

      <Sectie>
        <div className="grid gap-6 md:grid-cols-2">
          <Kaart>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <KoffieKop className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl">{KOFFIEZAKEN.titel}</h2>
            <p className="mt-2 text-muted-foreground">{KOFFIEZAKEN.tekst}</p>
            <div className="mt-6">
              <KnopLink to="/contact" variant="zacht">
                Neem contact op
              </KnopLink>
            </div>
          </Kaart>

          <Kaart>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <BoekIcoon className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl">{BOEKHANDELS.titel}</h2>
            <p className="mt-2 text-muted-foreground">{BOEKHANDELS.tekst}</p>
            <div className="mt-6">
              <KnopLink to="/contact" variant="zacht">
                Neem contact op
              </KnopLink>
            </div>
          </Kaart>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Foto
            src={geheugenpolitie.url}
            alt="De roman De geheugenpolitie voor een boekhandel in Den Bosch"
            ratio="aspect-[4/3]"
          />
          <Foto
            src={gewetenloos.url}
            alt="De thriller Gewetenloos van Karin Slaughter bij een iced latte op een terras"
            ratio="aspect-[4/3]"
          />
        </div>
      </Sectie>

      <Sectie className="bg-secondary/50">
        <div className="mx-auto max-w-3xl">
          <div>
            <Kop>{OVERIG.titel}</Kop>
            <p className="mt-3 text-lg text-muted-foreground">{OVERIG.tekst}</p>
            <div className="mt-7">
              <KnopLink to="/contact">Neem contact op</KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      <ContactCta
        titel="Samen iets leuks opzetten?"
        tekst="Stuur ons een berichtje; dan plannen we een kop koffie."
        primair={null}
      />
    </>
  );
}
