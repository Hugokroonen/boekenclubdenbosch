import { createFileRoute, Link } from "@tanstack/react-router";
import { KnopLink, Kaart, Sectie, Kop, Foto, Label } from "@/components/ui-basis";
import { BonenDivider, KoffieBoon, KoffieKop, KoffieStoom, BoekIcoon } from "@/components/koffie";
import { ContactCta } from "@/components/ContactCta";

import boekKoffie from "@/assets/boek-koffie.jpeg.asset.json";
import groepsfoto from "@/assets/groepsfoto.jpeg.asset.json";
import eigenaarPortret from "@/assets/eigenaar-portret.jpeg.asset.json";
import koffieBoekenlegger from "@/assets/koffie-boekenlegger.jpeg.asset.json";
import douweEgberts from "@/assets/douwe-egberts-pand.jpeg.asset.json";
import koffieZeepaardje from "@/assets/koffie-zeepaardje.jpeg.asset.json";
import tweeLattes from "@/assets/twee-lattes.jpeg.asset.json";

/* ============================================================
   TEKSTEN — HOME
   Alle zichtbare tekst van deze pagina staat hieronder bij elkaar,
   zodat je 'm makkelijk zelf kunt aanpassen.
   ============================================================ */
const HERO = {
  label: "Boekenclub in Den Bosch ☕",
  titel: "Boekenclub Den Bosch",
  subtitel:
    "Samen lezen, samen borrelen. Iedere paar weken een goed boek en een lekkere koffie — informeel, gezellig en zonder poespas.",
  knopPrimair: "Word lid",
  knopSecundair: "Over ons",
};

const DIENSTEN = [
  {
    titel: "Lid worden",
    tekst: "Sluit je aan bij een gezellige boekenclub in Den Bosch.",
    to: "/lid-worden",
    kleur: "bg-primary text-primary-foreground",
  },
  {
    titel: "Beginnend auteur",
    tekst: "Zelf een boek geschreven? Laat het door echte lezers proeflezen.",
    to: "/beginnend-auteur",
    kleur: "bg-accent text-accent-foreground",
  },
  {
    titel: "Samenwerkingen",
    tekst: "Koffiezaak of boekhandel? Denk met ons mee.",
    to: "/samenwerkingen",
    kleur: "bg-berry text-berry-foreground",
  },
];

const OVER_ONS_KORT = {
  titel: "Wie zijn wij?",
  tekst:
    "Boekenclub Den Bosch is ontstaan uit een simpele liefde voor lezen en gezelligheid. Iedere paar weken komen we samen in een gezellig café om samen een boek te bespreken — informeel, laagdrempelig en altijd met een lekkere koffie erbij.",
  link: "Lees meer over ons",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boekenclub Den Bosch | Samen lezen in Den Bosch" },
      {
        name: "description",
        content:
          "Een gezellige, informele boekenclub in Den Bosch. Iedere paar weken samen een boek bespreken met een lekkere koffie erbij. Word lid, laat je boek proeflezen of werk met ons samen.",
      },
      { property: "og:title", content: "Boekenclub Den Bosch | Samen lezen in Den Bosch" },
      {
        property: "og:description",
        content: "Samen lezen, samen borrelen. Informeel, gezellig en zonder poespas.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <Sectie className="bg-koffiedots">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Label>
              <KoffieBoon className="h-4 w-4 text-primary" />
              {HERO.label}
            </Label>
            <h1 className="mt-5 text-5xl text-balance-nl sm:text-6xl">{HERO.titel}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {HERO.subtitel}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <KnopLink to="/lid-worden">{HERO.knopPrimair}</KnopLink>
              <KnopLink to="/over-ons" variant="lijn">
                {HERO.knopSecundair}
              </KnopLink>
            </div>
          </div>

          <div className="relative">
            <KoffieStoom className="absolute -top-6 left-10 h-12 w-16 text-latte" />
            <Foto
              src={boekKoffie.url}
              alt="Een boek naast een cappuccino op een cafétafel in Den Bosch"
              ratio="aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-3xl bg-card px-5 py-4 shadow-lift sm:block">
              <p className="font-display font-bold">20+ leden</p>
              <p className="text-sm text-muted-foreground">verdeeld over meerdere clubjes</p>
            </div>
          </div>
        </div>
      </Sectie>

      <BonenDivider />

      {/* DRIE DIENSTEN */}
      <Sectie>
        <Kop sub="Kies waar jij nieuwsgierig naar bent — alles mag laagdrempelig.">
          Dit doen we
        </Kop>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DIENSTEN.map((d) => (
            <Link key={d.to} to={d.to} className="group">
              <Kaart className="h-full transition-transform duration-200 group-hover:-translate-y-1.5">
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${d.kleur}`}
                >
                  {d.titel === "Beginnend auteur" ? (
                    <BoekIcoon className="h-7 w-7" />
                  ) : (
                    <KoffieKop className="h-7 w-7" />
                  )}
                </span>
                <h3 className="mt-5 text-2xl">{d.titel}</h3>
                <p className="mt-2 text-muted-foreground">{d.tekst}</p>
                <span className="mt-5 inline-block font-display font-bold text-primary">
                  Bekijk →
                </span>
              </Kaart>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <KnopLink to="/contact" variant="zacht">
            Neem contact op
          </KnopLink>
        </div>
      </Sectie>

      {/* OVER ONS (kort) */}
      <Sectie className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Foto
              src={groepsfoto.url}
              alt="De leden van Boekenclub Den Bosch samen in het café"
              ratio="aspect-[3/4]"
            />
            <Foto
              src={eigenaarPortret.url}
              alt="De oprichter van Boekenclub Den Bosch met een auteur"
              ratio="aspect-[3/4]"
              className="mt-8"
            />
          </div>
          <div>
            <Kop sub={OVER_ONS_KORT.tekst}>{OVER_ONS_KORT.titel}</Kop>
            <div className="mt-7 flex flex-wrap gap-4">
              <KnopLink to="/over-ons" variant="primair">
                {OVER_ONS_KORT.link}
              </KnopLink>
              <KnopLink to="/contact" variant="zacht">
                Neem contact op
              </KnopLink>
            </div>
          </div>
        </div>
      </Sectie>

      <Sectie>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Foto
            src={koffieBoekenlegger.url}
            alt="Cappuccino met een boekenlegger van de boekenclub"
            ratio="aspect-[16/10]"
          />
          <div>
            <Kop sub="Geen literaire verplichtingen: gewoon vertellen wat je van het boek vond, met een kop koffie erbij.">
              Lezen mag ook gewoon leuk zijn
            </Kop>
            <ul className="mt-6 grid gap-3">
              {[
                "Twee clubjes: romans of thrillers",
                "Iedere 6 à 7 weken samen bij Douwe Egberts",
                "Samen kiezen we het volgende boek",
              ].map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <KoffieBoon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Foto
            src={douweEgberts.url}
            alt="Het Douwe Egberts café in Den Bosch waar de club samenkomt"
            ratio="aspect-[4/3]"
          />
          <Foto
            src={koffieZeepaardje.url}
            alt="Latte art naast twee romans van de boekenclub"
            ratio="aspect-[4/3]"
          />
          <Foto
            src={tweeLattes.url}
            alt="Twee koffies en twee boeken op een marmeren tafel"
            ratio="aspect-[4/3]"
          />
        </div>
      </Sectie>


      <ContactCta />
    </>
  );
}
