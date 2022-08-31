import React from 'react';
import { AppContext } from '../context/appContext';
import { getRecipes } from '../services/recipeService';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from '../components/Recipes';
// import styles from "../layout/Styles.module.css";


function App() {
  return (
    <div>
      <div>
        <AppContext>
          <Header />
          <Recipes />
          {/* <Search />
          <Filter />  
          <Recipes />
          <MyRecipes />
          <MyFridge /> */}
        </AppContext>
      </div>
    </div>

  );
}

export default App;
