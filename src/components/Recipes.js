import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { getRecipes } from '../services/recipeService';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        query: '',
        cuisine: '',
        diet: '',
        intolerances: '',

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        getRecipes(formData.query, formData.diet, formData.cuisine, formData.intolerances).then(result => setData(result.data.results));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="query"
                        id="query"
                        className="w-100 p-1"
                        placeholder="Search recipes"
                        value={formData.query}
                        onChange={({ target }) => setFormData({ ...formData, query: target.value })}
                    />
                </div>
                <div className="d-flex gap-3 mt-3">
                    <select
                        name="cuisine"
                        value={formData.cuisine}
                        className="flex-grow-1 p-1"
                        onChange={({ target }) => setFormData({ ...formData, cuisine: target.value })}
                    >
                        <option value="">Select a cuisine</option>
                        <option value="Greek">Greek</option>
                    </select>
                    <select
                        name="diet"
                        value={formData.diet}
                        className="flex-grow-1 p-1"
                        onChange={({ target }) => setFormData({ ...formData, diet: target.value })}
                    >
                        <option value="">Select a diet</option>
                        <option value="Gluten Free">Gluten Free</option>
                    </select>
                    <select
                        name="intolerances"
                        value={formData.intolerances}
                        className="flex-grow-1 p-1"
                        onChange={({ target }) => setFormData({ ...formData, intolerances: target.value })}
                    >
                        <option value="">Select an intolerance</option>
                        <option value="Dairy">Dairy</option>
                    </select>
                </div>
                <div className="mt-3 d-flex justify-content-end">
                    <input type="submit" value="Search" />
                </div>
            </form>
            <div className="d-flex flex-wrap">
                {data.map(row => (
                    <RecipeCard recipe={row} />
                ))}
            </div>
        </div>
    )
}

export default Recipes;