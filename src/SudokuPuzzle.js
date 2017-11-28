class SudokuPuzzle {
  constructor(stringRepresentation) {
    this.stringRepresentation = stringRepresentation;
  }

  to2dArray(){
    let placeStr = this.stringRepresentation.replace(/\./g, " ");
    let arr = placeStr.split('');
    let grid = [];

    for (var i = 0; i < 81; i += 9) {
      grid.push(arr.slice(i, i + 9));
    }

    return grid;
  }

  solve(){
    return [];
  }
}

export default SudokuPuzzle;
