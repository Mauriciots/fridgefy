import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import { truncateRecipeTitle } from '../shared/utils';
import { deleteRecipe, getSavedRecipes } from '../services/recipeService'

const MyRecipes = () => {
    const { state, dispatch } = useAppContext();

    const removeRecipe = (recipeId) => {
        deleteRecipe(recipeId).then(() => {
            getSavedRecipes(state.user.uid).then((docs) => dispatch({ 
                type: 'loadSavedRecipes',
                payload: { docs },
            }));
        });
    }

    return (
        <div className="p-1">
            <h4 className="mb-4">My Recipes </h4>
            <ul className="list-unstyled">
                {state.recipes.map((r) => (
                    <li key={r.id} style={{ fontSize: '0.8rem' }} className="mb-2">
                        <FaTrash className="me-2 text-danger" onClick={() => removeRecipe(r.docId)} /> {truncateRecipeTitle(r.title)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyRecipes;