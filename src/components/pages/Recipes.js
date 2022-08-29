import React from 'react';
import { useAppContext } from '../context/appContext';

const Recipes = () => {
    const { state } = useAppContext();

    return <p>Recipes - {state.anything}</p>
}

export default Recipes;