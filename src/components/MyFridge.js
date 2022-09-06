import React, { useState } from 'react';
import { getIngredients } from '../services/ingredientService';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        query: '',
    });
    console.log(data)
    const handleSubmit = (e) =>{
        e.preventDefault();
        getIngredients(formData.query).then(result => {setData(result.data.results) 
            console.log(data.results)}
    
        )
    
    }
    
   

    return ( 
    <div className='w100 p-1'>
        <form onSubmit={handleSubmit}>
            <h4>My Fridge</h4>
            <input
                type='text'
                name='query'
                id='query'
                className='w100 p-1'
                placeholder='Search Ingredients'
                value={formData.query}
                onChange={({ target }) => setFormData ({...formData, query: target.value})}
                
            />
            <input 
                type='submit'
                value='Add'
                className='w100 p-1'
            />

        </form>
        <div className='d-flex flex-wrap' >
            {data.map(row => (
                <RecipeCard recipe={row} />
            ))}
        </div>
        


    </div>
    )
}

export default Recipes;