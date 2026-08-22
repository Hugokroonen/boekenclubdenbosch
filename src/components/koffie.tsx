/**
 * Koffie-iconen & decoraties — het huisstijlelement van Boekenclub Den Bosch.
 * Deze SVG'tjes komen op iedere pagina terug (koppen, bonen, stoom, dividers).
 */

export function KoffieKop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 26h34v14a13 13 0 0 1-13 13H25a13 13 0 0 1-13-13V26Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M46 30h4a7 7 0 0 1 0 14h-4"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="8" y="53" width="42" height="5" rx="2.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

export function KoffieStoom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 30" className={className} aria-hidden="true" fill="none">
      {[6, 18, 30].map((x, i) => (
        <path
          key={x}
          d={`M${x} 26c-4-5 4-7 0-12s2-8 2-8`}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={0.5 + i * 0.15}
        />
      ))}
    </svg>
  );
}

export function KoffieBoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <ellipse cx="16" cy="16" rx="9" ry="13" transform="rotate(-28 16 16)" fill="currentColor" />
      <path
        d="M11 25c4-6 4-12 10-18"
        stroke="var(--background)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function BoekIcoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M8 12h18a6 6 0 0 1 6 6v34a6 6 0 0 0-6-6H8V12Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M56 12H38a6 6 0 0 0-6 6v34a6 6 0 0 1 6-6h18V12Z" fill="currentColor" />
    </svg>
  );
}

/** Vrolijke koffieboon-divider tussen secties */
export function BonenDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-8 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-border sm:w-28" />
      <KoffieBoon className="h-5 w-5 text-latte" />
      <KoffieBoon className="h-6 w-6 text-primary" />
      <KoffieBoon className="h-5 w-5 text-accent" />
      <span className="h-px w-16 bg-border sm:w-28" />
    </div>
  );
}
