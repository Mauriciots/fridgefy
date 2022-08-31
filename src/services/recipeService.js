import axios from 'axios';

const BASE_ENDPOINT = 'https://api.spoonacular.com';

const baseParams = {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
}

export const getRecipes = (query, diet, cuisine, intolerances) => {
    const params = {
        ...baseParams,
        query,
        cuisine,
        diet,
        intolerances,
    }
    return axios.get(`${BASE_ENDPOINT}/recipes/complexSearch`, { params })
}