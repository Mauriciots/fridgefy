import axios from 'axios';

const BASE_ENDPOINT = 'https://api.spoonacular.com';

const baseParams = {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
}

export const getRecipes = () => {
    const params = {
        ...baseParams,
        query: 'pasta',
    }
    return axios.get(`${BASE_ENDPOINT}/recipes/complexSearch`, { params })
}