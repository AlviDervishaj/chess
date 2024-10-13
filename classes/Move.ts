import { Board } from "./Board";
// start and target are the indices
interface MoveInterface {
  start: number,
  target: number,
}

export class Move {
  start: MoveInterface["start"] = 0;
  target: MoveInterface["target"] = 0;
  moves: Array<MoveInterface> = [];

  generateMoves(board: Board) {
    for (let startingSquare = 0; startingSquare < 64; startingSquare++) {
      const square = board.squares[startingSquare];
      // Determine which player is going to move next;
      // Check if he is going to move is own pieces or his opponent's;
      //

    }
  }
}
