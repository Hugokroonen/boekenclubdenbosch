import { createFileRoute, Link } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieKop, BoekIcoon, KoffieBoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";

import douweEgberts from "@/assets/douwe-egberts-pand.jpeg.asset.json";
import eigenaarPortret from "@/assets/eigenaar-portret.jpeg.asset.json";
import tweeLattes from "@/assets/twee-lattes.jpeg.asset.json";
import boekenCollage from "@/assets/boeken-collage.jpeg.asset.json";

/* ============================================================
   TEKSTEN — SAMENWERKINGEN
   ============================================================ */
const INTRO = {
  titel: "Samenwerkingen",
  tekst:
    "Lokale betrokkenheid vinden wij ontzettend belangrijk. Als Boekenclub Den Bosch komen we altijd samen in een gezellige koffiezaak of op een leuke plek om over onze boeken te praten. De club groeit gestaag: inmiddels zijn we al met 20 leden, verspreid over meerdere clubjes die iedere 7 weken samenkomen.",
};

const KOFFIEZAKEN = {
  titel: "Voor koffiezaken",
  tekst:
    "We zijn altijd op zoek naar een leuke koffiezaak die ons verwelkomt. In ruil daarvoor komt er iedere 7 weken minimaal 10 man langs voor een gezellige avond borrelen, én krijg je gratis promotie op onze social media — onder onze huidige leden, nieuwe leden en iedereen die het leuk vindt om een boekenclub te volgen. Lijkt je een samenwerking wat? Neem contact op!",
};

const BOEKHANDELS = {
  titel: "Voor boekhandels",
  tekst:
    "We lezen met maar liefst 20 man steeds hetzelfde boek. Die boeken kopen we nu in via verschillende platformen, maar we kopen ze net zo graag via één lokale boekhandel. Voor jou interessant: een doorlopende stroom aan boekverkoop in grotere aantallen. Wij staan open voor een samenwerking met korting op boeken — dan profiteren onze lezers én jij. Interesse? Laat het ons weten.",
};

const OVERIG = {
  titel: "Overige samenwerkingen",
  voor: "Heb je een andere vraag of samenwerking in gedachten? Of ben je bijvoorbeeld beginnend auteur? ",
  link: "Klik dan hier",
  na: " om meer te lezen. En ben je gewoon benieuwd wie wij zijn en waarom we lezen zo belangrijk vinden? Neem gerust contact op — we zijn heel benaderbaar.",
};

export const Route = createFileRoute("/samenwerkingen")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Samenwerkingen" },
      {
        name: "description",
        content:
          "Koffiezaak of boekhandel in Den Bosch? Boekenclub Den Bosch werkt graag lokaal samen: iedere 7 weken 10+ lezers over de vloer en gratis promotie.",
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
            src={tweeLattes.url}
            alt="Twee koffies naast boeken op een marmeren tafel"
            ratio="aspect-[4/3]"
          />
          <Foto
            src={boekenCollage.url}
            alt="Collage van boeken die de club het afgelopen jaar las"
            ratio="aspect-[4/3]"
          />
        </div>
      </Sectie>

      <Sectie className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Foto
            src={eigenaarPortret.url}
            alt="De oprichter van Boekenclub Den Bosch"
            bijschrift="Even persoonlijk: je praat gewoon met ons, niet met een organisatie."
            ratio="aspect-[4/5]"
          />
          <div>
            <Kop>{OVERIG.titel}</Kop>
            <p className="mt-3 text-lg text-muted-foreground">
              {OVERIG.voor}
              <Link to="/beginnend-auteur" className="font-bold text-primary underline">
                {OVERIG.link}
              </Link>
              {OVERIG.na}
            </p>
            <div className="mt-7">
              <KnopLink to="/contact">Neem contact op</KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      <ContactCta
        titel="Samen iets leuks opzetten?"
        tekst="Eén berichtje en we plannen zo een kop koffie."
        primair={{ label: "Word lid", to: "/lid-worden" }}
      />
    </>
  );
}
