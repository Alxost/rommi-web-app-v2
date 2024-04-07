import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {StyledCard} from "../styles.tsx"

function Card({id, value, color}) {
    const [{isDragging}, drag] = useDrag(()=> ({
        type: "card",
        item: {id:id, value:value, color:color},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return isDragging ? 
    <StyledCard key={id}
    $color={color}
    $dragging = {isDragging}
    ref= {drag}> {""}
    </StyledCard>:<StyledCard key={id}
    $color={color}
    $dragging = {isDragging}
    ref= {drag}> {value}
    </StyledCard>;
}
export default Card;