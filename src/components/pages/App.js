import React, { useEffect } from 'react';
import { AppContext } from '../context/appContext';
import Recipes from '../modules/Recipes';
import { getRecipes } from '../../services/recipeService';
import Header from '../layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../layout/Styles.module.css";
import MyRecipes from '../modules/MyRecipes';
import MyFridge from '../modules/MyFridge';
import Search from '../modules/Search';
import Filter from '../modules/Filter';


function App() {
  useEffect(() => {
    getRecipes().then((result) => console.log(result));
  }, []);

  return (

    <div className={styles.container}>
      <div className={styles.App}>
          <Search />
          <Filter />  
        <AppContext>
          <Header />
          <Recipes />
          <MyRecipes />
          <MyFridge />
        </AppContext>
      </div>
    </div>

  );
}

export default App;
