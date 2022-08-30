import React from 'react';
import { useAppContext } from '../context/appContext';
import styles from "../layout/Styles.module.css";



const Recipes = () => {
    return (
        <li className={styles.RecipeThumb}>
            <div className={styles.RecipeThumbHeader}>Header</div>
            <div className={styles.RecipeThumbnail}>
                <img src={``} alt="Recipe thumbnail "></img>
            </div> 
            <div className={styles.RecipeFooter}>
                <button><span className={styles.RecipeButton}></span></button>
                <button><span className={styles.RecipeButton}></span></button>
            </div>  
        </li>
    )
}

export default Recipes;