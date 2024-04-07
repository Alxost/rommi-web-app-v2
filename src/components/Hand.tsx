import React from "react";
import Card from "./Card.tsx";

function Hand({gameState}){
if(gameState.activePlayerName === "You"){
return(
        <>
         <div className= "Hand" >
         {gameState.activePlayerHand.rowContent.map((card) => {
                return <Card key={card.id} value = {card.value} id={card.id} color={card.color} />
        })}
        </div>
        </>
    );}
else{
    return(
        <>
         <div className= "Hand" >
        </div>
        </>
    );

}
}

export default Hand;