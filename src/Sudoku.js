import React, { Component } from 'react';
// import logo from './logo.svg';
import './Sudoku.css';

function Square(props) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}

class Box extends React.Component {
  renderSquare(y, x) {
    return (
      <Square
        value={this.props.squares[y][x]}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="grid-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
        </div>
        <div className="grid-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
        </div>
        <div className="grid-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    let boxes = [];

    for (var x = 0; x <= 6; x += 3) {
      for (var y = 0; y <= 6; y += 3) {
        boxes.push(<Box
          squares={[
            [this.props.layout[0 + x][0 + y], this.props.layout[0 + x][1 + y], this.props.layout[0 + x][2 + y]],
            [this.props.layout[1 + x][0 + y], this.props.layout[1 + x][1 + y], this.props.layout[1 + x][2 + y]],
            [this.props.layout[2 + x][0 + y], this.props.layout[2 + x][1 + y], this.props.layout[2 + x][2 + y]],
          ]}
        />);
      }
    }

    return (
      <div className="board">
        <div className="board-row">
          {boxes.slice(0, 3)}
        </div>
        <div className="board-row">
          {boxes.slice(3, 6)}
        </div>
        <div className="board-row">
          {boxes.slice(6, 9)}
        </div>
      </div>
    );
  }
}

class Sudoku extends React.Component {
  constructor() {
    super();
    this.state = {
      startingBoard: placeStringTo2dArray(NUMBER_PLACE_STRING),
      finalBoard: Array(9).fill(Array(9).fill('.')),
    };
  }

  handleClick() {
    alert("omg I love flags, they represent countries well");
  }

  render() {
    return (
      <div>
        <h1> Sudoku Solver </h1>
        <div className="sudoku-game">
            <Board layout={this.state.startingBoard} />
            <button onClick={() => {this.handleClick()}}> Solve </button>
            <Board layout={this.state.finalBoard} />
        </div>
      </div>
    );
  }
}

let NUMBER_PLACE_STRING = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
function placeStringTo2dArray(placeStr) {
  placeStr = placeStr.replace(/\./g, " ");
  let arr = placeStr.split('');
  let grid = [];

  for (var i = 0; i < 81; i += 9) {
    grid.push(arr.slice(i, i + 9));
  }

  return grid;
}

// ========================================

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


export default Sudoku;
