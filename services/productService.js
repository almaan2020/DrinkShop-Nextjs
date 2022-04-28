import axios from "axios";
import http from './httpService';
import config from "../config/config.json";

const apiEndpoint = config.apiUrl;

export function getProducts(currentPage, currentFood) {
    if (!currentPage) currentPage = 1;
    const endPoint = `${apiEndpoint}?page=${currentPage}`;
    if (!currentFood) return http.get(endPoint);
    return http.get(`${endPoint}&food=${currentFood}`);
}

export const getMapProducts = async (idArray, setProducts) => {
    axios.all(
        idArray.map((id) =>
            axios.get(`${apiEndpoint}/${id}`)
        )
    )
        .then(
            axios.spread((...response) => {
                const products = [];
                for (var i = 0; i < idArray.length; ++i) {
                    products.push(response[i].data);
                }
                setProducts([...products])    //destruction cause new state and rerender
            })
        );
}