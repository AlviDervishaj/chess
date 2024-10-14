import { Board } from "../../classes/Board";
import { DrawSquare } from "./DrawSquare";
export function DrawBoard() {
  const board = new Board();
  return (
    <div className="w-fit h-fit mx-auto self-center justify-self-center p-4 grid grid-cols-8 grid-rows-8 place-items-center">
      {board.squares.map((square, index) => <DrawSquare key={index} square={square} />)}
    </div>
  );

}
