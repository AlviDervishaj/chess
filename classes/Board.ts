import { lightColor, darkColor, files, ranks, isUpperCase, isNumeric, STARTINGFEN } from "../constants";
import PTS, { PieceENUM } from "../constants/pts";
import { Piece } from "./Piece";
import { Square } from "./Square";
export class Board {
  positionFEN: string;
  initialPositionFEN: string;
  squares: Array<Square>;

  constructor() {
    this.squares = [];
    this.positionFEN = "";
    this.initialPositionFEN = STARTINGFEN;
    this.drawBoard();
    this.mapFENToPosition(this.initialPositionFEN);
  }

  drawBoard() {
    for (let file = files.length - 1; file >= 0; file--) {
      for (let rank = 0; rank < ranks.length; rank++) {
        // Make every other square light;
        const isLightSquare: boolean = (file + rank) % 2 !== 0;
        const squareColor: string = isLightSquare ? lightColor : darkColor;
        const piece = new Piece(PieceENUM.None, PieceENUM.None);
        const square = new Square(squareColor, piece);
        this.squares.push(square);
      }
    }
  }
  mapFENToPosition(FEN: string) {
    const fenBoard: string = FEN.split(" ")[0];
    let file = 0, rank = 7;
    for (const symbol of fenBoard) {
      if (symbol === "/") {
        file = 0;
        rank--;
      }
      else {
        if (isNumeric(symbol)) {
          // symbol is integer / number;
          // Add that many spaces to file to display the piece;
          file += parseInt(symbol);
        }
        else {
          // symbol is letter ( piece initial )
          const pieceColor = isUpperCase(symbol) ? PieceENUM.White : PieceENUM.Black;
          const pieceType: PieceENUM = PTS.has(symbol.toLowerCase()) ? PTS.get(symbol.toLowerCase()) as PieceENUM : PieceENUM.None;
          const piece = new Piece(pieceColor, pieceType)
          this.squares[rank * 8 + file].piece = piece;
          file++;
        }
      }
    }
    console.log({ squares: this.squares });
  }
}
