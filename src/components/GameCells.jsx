import React from "react";

export default function GameCells(props) {
    const { cell, onClick } = props;

    return (

        <div
            onClick={onClick}
            className={`cell ${cell.visible ? "visible" : ""} ${cell.hasMine && cell.visible ? "mine" : ""} `}
        >
            {cell.visible && (cell.hasMine ? "💣" : cell.numberOfNeighbouringMines || "0")}

        </div >

    )
}