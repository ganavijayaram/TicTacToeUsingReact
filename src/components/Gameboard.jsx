const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  return <ol id="game-board">
    {initialGameBoard.map((row, rowIndex) => {
        <li key={}></li>
    })}
  </ol>
}
