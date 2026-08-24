import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Herbruikbare bouwstenen in de huisstijl (afgeronde hoeken, zachte schaduw). */

const knopBasis =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const knopStijlen = {
  primair: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  zacht: "bg-secondary text-secondary-foreground hover:bg-latte",
  accent: "bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  lijn: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
} as const;

type Variant = keyof typeof knopStijlen;

export function KnopLink({
  to,
  hash,
  children,
  variant = "primair",
  className = "",
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className={`${knopBasis} ${knopStijlen[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Knop({
  children,
  variant = "primair",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...rest}
      className={`${knopBasis} ${knopStijlen[variant]} disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

export function Kaart({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-3xl border border-border bg-card p-7 shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}

export function Sectie({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Kop({
  children,
  sub,
  className = "",
}: {
  children: ReactNode;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="text-3xl text-balance-nl sm:text-4xl">{children}</h2>
      {sub ? <p className="mt-3 text-lg text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-display text-sm font-bold text-secondary-foreground">
      {children}
    </span>
  );
}

/**
 * Foto met vrolijke lijst. `bijschrift` beschrijft de foto.
 * Nieuwe foto's? Zet ze in src/assets en verwissel de import op de pagina.
 */
export function Foto({
  src,
  alt,
  bijschrift,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  bijschrift?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-3xl border-4 border-card bg-secondary shadow-lift ${ratio}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {bijschrift ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {bijschrift}
        </figcaption>
      ) : null}
    </figure>
  );
}
