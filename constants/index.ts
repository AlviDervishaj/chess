export const darkColor: string = "#b48863" as const;
export const lightColor: string = "#f0dab5" as const;
export const files: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
export const ranks: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
export const STARTINGFEN: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
export const DirectionOffsets = [8, -8, -1, 1, 7, -7, 9, -9] as const;
const NumSquaresToEdge: Array<Array<number>> = [];


export function precomputeMoveData() {
  for (let file = 0; file < files.length; file++) {
    for (let rank = 0; rank < ranks.length; rank++) {
      const numNorth = 7 - rank;
      const numSouth = rank;
      const numWest = file;
      const numEast = 7 - file;
      const squareIndex = rank * 8 + file;

      NumSquaresToEdge[squareIndex] = [
        numNorth,
        numSouth,
        numWest,
        numEast,
        Math.min(numNorth, numWest),
        Math.min(numSouth, numEast),
        Math.min(numNorth, numEast),
        Math.min(numSouth, numWest),
      ]
    }
  }
}

export function isNumeric(s: string) {
  return !isNaN(parseFloat(s));
}

export function isUpperCase(s: string) {
  return s === s.toUpperCase()
}
