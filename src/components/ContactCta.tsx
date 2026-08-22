import { KnopLink, Sectie } from "@/components/ui-basis";
import { KoffieKop, KoffieStoom } from "@/components/koffie";

/**
 * Terugkerende afsluiter onder iedere pagina/sectie:
 * altijd een duidelijke knop naar het contactformulier.
 */
export function ContactCta({
  titel = "Zin om aan te sluiten? Het is heel eenvoudig.",
  tekst = "Even een berichtje sturen is genoeg — geen gedoe, geen verplichtingen.",
  primair = { label: "Word lid", to: "/lid-worden" },
}: {
  titel?: string;
  tekst?: string;
  primair?: { label: string; to: string };
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
            <KnopLink to={primair.to} variant="primair">
              {primair.label}
            </KnopLink>
            <KnopLink to="/contact" variant="accent">
              Neem contact op
            </KnopLink>
          </div>
        </div>
      </div>
    </Sectie>
  );
}
