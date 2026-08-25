import { KnopLink, Sectie } from "@/components/ui-basis";
import { KoffieKop, KoffieStoom } from "@/components/koffie";

/** Instagram — vul hier de echte URL in zodra die bekend is. */
export const INSTAGRAM_URL = "https://www.instagram.com/boekenclubdenbosch/";

function InstagramIcoon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Terugkerende afsluiter onder iedere pagina/sectie:
 * altijd een duidelijke knop naar het contactformulier.
 */
export function ContactCta({
  titel = "Zin om aan te sluiten? Stuur ons een bericht!",
  tekst = "Andere vraag? Neem contact op.",
  primair = { label: "Word lid", to: "/lid-worden" },
  instagram = false,
}: {
  titel?: string;
  tekst?: string;
  /** Zet op null als je maar één knop wilt (alleen "Neem contact op"). */
  primair?: { label: string; to: string } | null;
  /** Toont een Instagram-knop naast de contactknop. */
  instagram?: boolean;
}) {
  return (
    <Sectie>
      <div className="relative overflow-hidden rounded-3xl bg-mocha px-7 py-12 text-cream shadow-lift sm:px-12">
        <KoffieStoom className="absolute right-10 top-6 h-10 w-14 text-latte/50" />
        <KoffieKop className="absolute -bottom-6 right-6 h-32 w-32 text-latte/20" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl text-balance-nl sm:text-4xl">{titel}</h2>
          <p className="mt-3 text-lg text-cream/80">{tekst}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {primair ? (
              <KnopLink to={primair.to} variant="primair">
                {primair.label}
              </KnopLink>
            ) : null}
            <KnopLink to="/contact" variant="accent">
              Neem contact op
            </KnopLink>
            {instagram ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Volg Boekenclub Den Bosch op Instagram"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 px-5 py-2.5 font-display font-bold text-cream transition hover:bg-cream/10"
              >
                <InstagramIcoon className="h-5 w-5" />
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Sectie>
  );
}
