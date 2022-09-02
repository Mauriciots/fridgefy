import axios from 'axios';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    doc,
    where,
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
    const doc = await addDoc(recipesCollection, { ...recipe, userId });
    return doc.id;
}

export const getSavedRecipes = async (userId) => {
    const q = query(recipesCollection);
    const response = await getDocs(q, where('userId', '==', userId));
    return response.docs.map(d => ({ ...d.data(), docId: d.id }));
}

export const deleteRecipe = async (docId) => {
    const docRef = doc(db, "fridgefy-recipes", docId);
    return deleteDoc(docRef);
}