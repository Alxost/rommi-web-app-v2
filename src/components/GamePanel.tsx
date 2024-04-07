import React from "react";
import axios from "axios";

function GamePanel({gameState, updateGameState}){
    if(gameState.activePlayerName === "You"){
        return(
                
            <div className= "GamePanel" >
                <ul>
                <div className="PlayerPanel">{gameState.activePlayerName}</div>
                <button className="DrawCardButton" onClick={() => {drawCard();updateGameState();}}>
                Draw card
                </button>
                <button className="NextButton" onClick={() => {nextPlayer(); updateGameState();}}>
        Next
    </button>
            </ul>
                </div>
                
    );
    }
    else{
        return(
                
                    <div className= "GamePanel" >
                        <ul>
                        <div className="PlayerPanel">{gameState.activePlayerName}</div>
                        <button className="NextButton" onClick={() => {botMove(); updateGameState();}}>
                next
            </button>
                    </ul>
                        </div>
                        
            );
    }       
}

function nextPlayer(){
    const url = "http://localhost:8080/nextPlayer"
    axios.post(url);
}
function botMove(){
    const url = "http://localhost:8080/botMove"
    axios.post(url);
}
function drawCard(){
    const url = "http://localhost:8080/drawCard"
    axios.post(url);
}
export default GamePanel;