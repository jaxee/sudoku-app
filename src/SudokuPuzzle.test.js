import SudokuPuzzle from './SudokuPuzzle';


let TEST_PUZZLE_UNSOLVED = '52...6.........7.13...........4..8..6......5...........418.........3..2...87.....'
let TEST_PUZZLE_SOLVED = '527316489896542731314987562172453896689271354453698217941825673765134928238769145'

it('returns a solved Sudoku board', () => {
  let puzzle = new SudokuPuzzle(TEST_PUZZLE_UNSOLVED);
  expect(puzzle.solve()).toEqual(TEST_PUZZLE_SOLVED);
});

it('returns a 2D array representing the board', () => {
  let puzzle = new SudokuPuzzle(TEST_PUZZLE_SOLVED);

  expect(puzzle.to2dArray()).toEqual([
    ['5', '2', '7', '3', '1', '6', '4', '8', '9'],
    ['8', '9', '6', '5', '4', '2', '7', '3', '1'],
    ['3', '1', '4', '9', '8', '7', '5', '6', '2'],
    ['1', '7', '2', '4', '5', '3', '8', '9', '6'],
    ['6', '8', '9', '2', '7', '1', '3', '5', '4'],
    ['4', '5', '3', '6', '9', '8', '2', '1', '7'],
    ['9', '4', '1', '8', '2', '5', '6', '7', '3'],
    ['7', '6', '5', '1', '3', '4', '9', '2', '8'],
    ['2', '3', '8', '7', '6', '9', '1', '4', '5'],
  ]);
});
