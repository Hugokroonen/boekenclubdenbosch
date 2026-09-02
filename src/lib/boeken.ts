/**
 * Boeken die de club al gelezen heeft, met de auteur en het cijfer van de club.
 * Nieuw boek gelezen? Zet 'm bovenaan of onderaan in deze lijst.
 */
export type GelezenBoek = {
  titel: string;
  auteur: string;
  cijfer: number;
};

export const GELEZEN_BOEKEN: GelezenBoek[] = [
  { titel: "Buitengewoon briljante wezens", auteur: "Shirley van Pelt", cijfer: 7.6 },
  { titel: "Het laatste verhaal van Jamie Gunn", auteur: "Thomas Olde Heuvelt", cijfer: 8.8 },
  { titel: "De verborgen boekenwinkel", auteur: "Evie Woods", cijfer: 5.1 },
  { titel: "Gewetenloos", auteur: "Karin Slaughter", cijfer: 7.1 },
  { titel: "Ik ken een berg die op me wacht", auteur: "Sholeh Rezazadeh", cijfer: 8.7 },
  { titel: "De enige die overbleef", auteur: "Riley Sager", cijfer: 7.3 },
  { titel: "De abdij van Northanger", auteur: "Jane Austen", cijfer: 4.3 },
  { titel: "Al het blauw van de hemel", auteur: "Mélissa Da Costa", cijfer: 8 },
  { titel: "De geheugenpolitie", auteur: "Yoko Ogawa", cijfer: 3.9 },
  { titel: "Kruistocht van een koningin", auteur: "Simone van der Vlugt", cijfer: 7.7 },
  { titel: "Als de wolven huilen", auteur: "Kristin Hannah", cijfer: 7.8 },
];

/** Cijfer netjes in Nederlandse notatie (7,6). */
export function cijferTekst(cijfer: number) {
  return cijfer.toFixed(1).replace(".", ",");
}
