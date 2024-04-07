import React from "react";
import Row from "./Row.tsx";
import EmptyRow from "./EmptyRow.tsx";

function GameBoard({gameState}){
      if(gameState==="undefined"){return(
        <>
        <div className = "EmptyBoard">
        </div>
        </>
    );}
return(
        <>
         <div className= "GameBoard" >
            {gameState.board.map((row) => {return< Row key= {row.id} row = {row} gameState = {gameState}/>})}

            <EmptyRow gameState={gameState}/>

        </div>
        </>
        
    );
}
export default GameBoard;
