import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { KoffieKop, KoffieStoom } from "@/components/koffie";

/** Navigatie — pas hier de menu-items aan. */
export const NAVIGATIE = [
  { label: "Home", to: "/" },
  { label: "Lid worden", to: "/lid-worden" },
  { label: "Beginnend auteur", to: "/beginnend-auteur" },
  { label: "Samenwerkingen", to: "/samenwerkingen" },
  { label: "Over ons", to: "/over-ons" },
  { label: "Contact", to: "/contact" },
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Tijdelijk logo — de eigenaar levert later een eigen logo aan. */}
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
        <KoffieStoom className="absolute -top-2 h-4 w-6 text-latte" />
        <KoffieKop className="h-6 w-6" />
      </span>
      <span className="font-display text-lg leading-5 font-extrabold sm:text-xl">
        Boekenclub
        <br />
        <span className="text-primary">Den Bosch</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {NAVIGATIE.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-full px-3.5 py-2 font-display font-bold transition hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/lid-worden"
            className="hidden rounded-full bg-primary px-5 py-2.5 font-display font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            Word lid
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu openen"
            className="rounded-2xl border-2 border-border p-2.5 lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden" aria-label="Mobiel menu">
          <ul className="grid gap-1">
            {NAVIGATIE.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display font-bold hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/lid-worden"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-2xl bg-primary px-4 py-3 text-center font-display font-bold text-primary-foreground"
              >
                Word lid
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
