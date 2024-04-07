import axios from "axios";

function fetchFromApi(url: string){
        var data = axios.get(url).then(response=> response.data);
        return(data);
}
export default fetchFromApi;
