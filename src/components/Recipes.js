import React, { useState } from 'react';
import { getRecipes } from '../services/recipeService';

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
                <input
                    type="text"
                    name="query"
                    id="query"
                    placeholder="Search recipes"
                    value={formData.query}
                    onChange={({ target }) => setFormData({ ...formData, query: target.value })}
                />
                <select
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={({ target }) => setFormData({ ...formData, cuisine: target.value })}
                >
                    <option value="">Select a cuisine</option>
                    <option value="Greek">Greek</option>
                </select>
                <select
                    name="diet"
                    value={formData.diet}
                    onChange={({ target }) => setFormData({ ...formData, diet: target.value })}
                >
                    <option value="">Select a diet</option>
                    <option value="Gluten Free">Gluten Free</option>
                </select>
                <select
                    name="intolerances"
                    value={formData.intolerances}
                    onChange={({ target }) => setFormData({ ...formData, intolerances: target.value })}
                >
                    <option value="">Select an intolerance</option>
                    <option value="Dairy">Dairy</option>
                </select>
                <input type="submit" value="Search" />
            </form>
            <div className="d-flex flex-wrap">
                {data.map(row => (
                    <div key={row.id} className="w-25">
                        <img src={row.image} alt={row.title} />
                        <h4>{row.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipes;