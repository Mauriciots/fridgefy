import React, { useEffect } from 'react';
import { AppContext } from '../context/appContext';
import Recipes from './Recipes';
import { getRecipes } from '../../services/recipeService';
import Header from '../layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    getRecipes().then((result) => console.log(result));
  }, []);

  return (
    <AppContext>
      <Header />
      <Recipes />
    </AppContext>
  );
}

export default App;
