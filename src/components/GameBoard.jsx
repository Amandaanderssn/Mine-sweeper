import React from "react";
// import { useState } from "react";
import createBoard from "../utils";
import GameCells from "./GameCells";

export default class GameBoard extends React.Component {

    constructor(props) {
        super(props);

        const boardSize = this.props.boardSize || 25;
        const numberOfMines = this.props.numberOfMines || 7;
        const theGameBoard = createBoard(boardSize, numberOfMines);
        // console.log(theGameBoard)

        this.state = {
            theGameBoard,

            gameOver: false, //GameOver if player finds a mine
            gameWon: false //GameWon if player clicks on all cells without finding any mines
        };
    }


    handleCellClick = (index) => {
        const { gameOver, theGameBoard, gameWon } = this.state;
        if (gameOver || gameWon) return;
        // console.log(this.state);
        const clickedCell = theGameBoard[index];
        const newGameBoard = this.showClickedCell(theGameBoard, index);
        this.setState({ theGameBoard: newGameBoard }, this.isGameWon);

        if (clickedCell.hasMine) {
            this.setState({ gameOver: true });
            console.log("you lost");
        };
    };

    showClickedCell = (theGameBoard, index) => {
        const newGameBoard = [...theGameBoard];
        newGameBoard[index] = { ...newGameBoard[index], visible: true }

        return newGameBoard;
    };

    isGameWon = () => {
        const { theGameBoard } = this.state;

        const ifWon = theGameBoard.every(cell => (cell.hasMine || cell.visible));
        if (ifWon) {
            this.setState({ gameWon: true });
            console.log("You won")
        }
    }

    restartGame = () => {
        const boardSize = this.props.boardSize || 25;
        const numberOfMines = this.props.numberOfMines || 7;
        const newGameBoard = createBoard(boardSize, numberOfMines);

        this.setState({
            theGameBoard: newGameBoard,
            gameOver: false, // Reset gameOver to false if game was lost
            gameWon: false //Reset gameWon to false if game was won
        });
    };
    ;


    render() {
        const { theGameBoard, gameOver, gameWon } = this.state;

        return (

            <section>
                <div className="board">
                    {theGameBoard.map((cell) => (
                        <GameCells
                            key={cell.index}
                            cell={cell}
                            onClick={() => this.handleCellClick(cell.index)}
                        />
                    ))}
                </div>
                <div>
                    {gameOver && <h2>You lost</h2>}
                    {gameWon && <h2>You won</h2>}
                    {(gameOver || gameWon) && (
                        <button onClick={this.restartGame}>Restart game</button>
                    )}
                </div>
            </section>

        );

    }
};
