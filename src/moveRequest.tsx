import axios from "axios";
//            A generic type to type the response
// -----------\/

function moveRequest({cardId, targetRowId}){
        const url = 'http://localhost:8080/move'
        axios.post(url, {
                cardId: cardId, targetRowId : targetRowId
        });
}
export default moveRequest;