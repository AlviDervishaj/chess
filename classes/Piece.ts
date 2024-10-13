import { PieceENUM } from "../constants/pts";

export class Piece {
  image: string;
  pieceType: PieceENUM;
  pieceColor: PieceENUM;
  constructor(pieceColor: PieceENUM, pieceType: PieceENUM) {
    this.pieceType = pieceType;
    this.pieceColor = pieceColor;
    this.image = "";

    this.getImage();
  }

  getPieceType() {
    if (this.pieceType === PieceENUM.King) return "k";
    else if (this.pieceType === PieceENUM.Queen) return "q";
    else if (this.pieceType === PieceENUM.Pawn) return "p";
    else if (this.pieceType === PieceENUM.Knight) return "n";
    else if (this.pieceType === PieceENUM.Bishop) return "b";
    else if (this.pieceType === PieceENUM.Rook) return "r";
    else return "";
  }
  getPieceColor() {
    if (this.pieceColor === PieceENUM.White) return "w";
    else if (this.pieceColor === PieceENUM.Black) return "b";
    else return "";
  }
  getImage() {
    const pieceColor = this.getPieceColor();
    const pieceType = this.getPieceType().toUpperCase();
    if (pieceColor.trim() === "" || pieceType.trim() === "") {
      this.image = "";
      return;
    };
    const path = `/pieces/cburnett/${pieceColor}${pieceType}.svg`;
    this.image = path;
    return;
  }
}

