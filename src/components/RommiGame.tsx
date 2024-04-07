import React, { useEffect, useState } from "react";
import GamePanel from "./GamePanel.tsx";
import GameBoard from "./GameBoard.tsx";
import Hand from "./Hand.tsx";
import fetchFromApi from "../fetchFromApi.tsx";


function RommiGame(){
    const [gameState, setGameState] = useState("undefined");
    const updateGameState = () => {fetchFromApi(url).then(response => {
        setGameState(response);});
    }
    const url = "http://localhost:8080/newGame"
    useEffect(() => {updateGameState();
        const intervalId = setInterval(updateGameState, 50);
        return () => clearInterval(intervalId);
    },[]);

    return(
        <>
        <GameBoard gameState = {gameState} />
        <Hand gameState={gameState} />
        < GamePanel gameState = {gameState} updateGameState={updateGameState} />
        </>
    );
}

export default RommiGame;