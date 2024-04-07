import React from "react";
import Card from "./Card.tsx"
import { useDrop } from "react-dnd";
import axios from "axios";

function EmptyRow({ gameState}){
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => {if(item === "undefined") return;
        newRow();
    },
        collect: (monitor)=>({
            isOver: !!monitor.isOver()
        })
    }),[gameState]);
    
    return(
        <>
         <div className = "EmptyRow" ref={drop}>
        </div>
        </>
    );
}
function newRow(){
    const url = "http://localhost:8080/newRow"
    console.log("newrow");
    axios.post(url);
}
export default EmptyRow;