import { Piece } from "./Piece";
export class Square {
  piece: Piece;
  color: string;
  constructor(color: string, piece: Piece) {
    this.color = color;
    this.piece = piece;
  }

  setColor(newColor: string) {
    this.color = newColor
  }
  setPiece(newPiece: Piece) {
    this.piece = newPiece;
  }

}

