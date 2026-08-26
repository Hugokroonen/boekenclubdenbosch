import { Link } from "@tanstack/react-router";
import { NAVIGATIE, Logo } from "@/components/Header";
import { KoffieBoon } from "@/components/koffie";
import { INSTAGRAM_URL } from "@/components/ContactCta";

/** Footer — teksten en links pas je hier aan. */
export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary/60 px-5 py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-muted-foreground">
            Samen lezen, samen borrelen. Informeel, gezellig en altijd met een lekkere koffie erbij.
          </p>
        </div>

        <div>
          <h3 className="text-lg">Snel naar</h3>
          <ul className="mt-3 grid gap-2">
            {NAVIGATIE.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Contact</h3>
          <p className="mt-3 text-muted-foreground">
            Lid worden of samenwerken? Stuur ons een berichtje!
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-flex rounded-full bg-primary px-5 py-2.5 font-display font-bold text-primary-foreground"
          >
            Neem contact op
          </Link>
        </div>

        <div>
          <h3 className="text-lg">Volg ons</h3>
          {/* Social links — vul hier later de echte Instagram-URL in. */}
          <ul className="mt-3 grid gap-2 text-muted-foreground">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
                Instagram
              </a>
            </li>
            <li>Den Bosch</li>
          </ul>
          <div className="mt-4 flex gap-2 text-latte">
            <KoffieBoon className="h-5 w-5" />
            <KoffieBoon className="h-5 w-5 text-primary" />
            <KoffieBoon className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-6xl text-sm text-muted-foreground">
        © {new Date().getFullYear()} Boekenclub Den Bosch — met liefde voor boeken en koffie.
      </p>
    </footer>
  );
}
