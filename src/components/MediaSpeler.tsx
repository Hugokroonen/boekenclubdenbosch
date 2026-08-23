import { useRef, useState } from "react";
import reel from "@/assets/boekenclub-reel.mp4.asset.json";

/**
 * Video/reel-speler voor de Activiteiten-sectie.
 *
 * MUZIEK: de reel zelf heeft geen geluidsspoor. Zodra er een muziekbestand is,
 * zet je die in src/assets (bijv. muziek.mp3.asset.json) en importeer je 'm
 * hieronder als MUZIEK_URL. De knop "Muziek aan" verschijnt dan automatisch.
 */
const MUZIEK_URL: string | null = null;

export function MediaSpeler() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muziekAan, setMuziekAan] = useState(false);

  function toggleMuziek() {
    const audio = audioRef.current;
    if (!audio) return;
    if (muziekAan) {
      audio.pause();
      setMuziekAan(false);
    } else {
      void audio.play();
      setMuziekAan(true);
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border-4 border-card shadow-lift">
        <video
          ref={videoRef}
          src={reel.url}
          controls
          playsInline
          loop
          muted
          autoPlay
          className="h-full w-full bg-mocha"
        />
      </div>

      {MUZIEK_URL ? (
        <>
          <audio ref={audioRef} src={MUZIEK_URL} loop preload="none" />
          <button
            type="button"
            onClick={toggleMuziek}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display font-bold text-accent-foreground"
          >
            {muziekAan ? "Muziek uit" : "Muziek aan"}
          </button>
        </>
      ) : (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Muziekje onder de reel? Stuur een audiobestand door, dan zet ik 'm eronder.
        </p>
      )}
    </div>
  );
}
