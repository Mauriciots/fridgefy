import axios from "axios";

const BASE_ENDPOINT = "https://api.spoonacular.com/food/ingredients/search"

const baseParams = {
    apiKey : process.env.REACT_APP_SPOONACULAR_API_KEY,
}

export const getIngredients = (query) => {
    const params = {
        ...baseParams,
        query
    }
    return axios.get(BASE_ENDPOINT, { params })
}
