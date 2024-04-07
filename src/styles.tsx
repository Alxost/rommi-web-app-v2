import styled, { css } from "styled-components";

const colors = {red: "#b43a0e", green: "#37e93"}

function colorConvert(color? : string){
    if (color === "red"){
        return "#c5003c";}
    if (color === "yellow"){
        return "#208516";}
    if (color === "black"){
        return "#464846";}
    if(color === "blue"){
        return "#55ead4";
    }
    else{
        return "#fffff";
    }
}

export const StyledCard = styled.div<{$color?: string; $dragging?: boolean;}>`
    vertical-align: middle;
    font-size: 55px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    padding: 5px;
    color: ${props => colorConvert(props.$color)};
    background-color: ${props => props.$dragging ? "#241e1e": "#ebe4cb"}
`