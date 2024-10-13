import { Square } from "../../classes/Square";
type PositionProps = { square: Square };
export function DrawSquare({ square }: PositionProps) {
  return (
    <div className="w-24 h-24 p-2 grid place-items-center" style={{ backgroundColor: square.color }}>
      {square.piece.image !== "" ?
        <img src={square.piece.image} alt={"Square Piece"} loading="lazy" />
        : null}
    </div>
  );
}
