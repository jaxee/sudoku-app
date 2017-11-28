import React, { Component } from 'react';
import './Sudoku.css';
import SudokuPuzzle from './SudokuPuzzle';


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
      <div class="grid">
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

    this.puzzle = new SudokuPuzzle(NUMBER_PLACE_STRING);
    this.state = {
      startingBoard: this.puzzle.to2dArray(),
      finalBoard: Array(9).fill(Array(9).fill('.')),
    };
  }

  handleClick() {
    console.log("omg I love flags, they represent countries well");
    this.setState({finalBoard: this.puzzle.to2dArray()});
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

export default Sudoku;
