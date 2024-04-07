import React from "react";
import Card from "./Card.tsx"
import { useDrop } from "react-dnd";
import moveRequest from "../moveRequest.tsx";

function Row({row, gameState}){
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item: any) => {if(item === "undefined") return;
        moveRequest({cardId: item.id, targetRowId: row.id});
    },
        collect: (monitor)=>({
            isOver: !!monitor.isOver()
        })
    }),[gameState]);
    
    return(
        <>
         <div className = "Row" ref={drop}>
                    {row.rowContent.map((card)=> {
                return <Card key={card.id} id={card.id} value = {card.value} color={card.color} />
            })}
        </div>
        </>
    );
}
export default Row;