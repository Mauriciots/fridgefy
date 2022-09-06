import axios from 'axios';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    doc,
  } from "firebase/firestore";
import { db } from '../firebase-config'

const BASE_ENDPOINT = 'https://api.spoonacular.com';

const baseParams = {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
}

const recipesCollection = collection(db, "fridgefy-recipes");

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

export const addRecipe = async (recipe, userId) => {
    addDoc(recipesCollection, { ...recipe, userId });
}