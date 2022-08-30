import React, { useEffect } from 'react';
import { AppContext } from '../context/appContext';
import { getRecipes } from '../services/recipeService';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "../layout/Styles.module.css";


function App() {
  useEffect(() => {
    getRecipes().then((result) => console.log(result));
  }, []);

  return (

    <div>
      <div>
        <AppContext>
          <Header />
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
