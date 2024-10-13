export enum PieceENUM {
  None = 0,
  King = 1,
  Pawn = 2,
  Knight = 3,
  Bishop = 4,
  Rook = 5,
  Queen = 6,

  White = 8,
  Black = 16,
}

export const PieceTypeSymbols: Record<string, PieceENUM> = {
  k: PieceENUM.King,
  n: PieceENUM.Knight,
  q: PieceENUM.Queen,
  p: PieceENUM.Pawn,
  r: PieceENUM.Rook,
  b: PieceENUM.Bishop,
  "": PieceENUM.None
}
const PTS = new Map<string, PieceENUM>();

for (const key in PieceTypeSymbols) {
  PTS.set(key, PieceTypeSymbols[key]);
}

export default PTS;
