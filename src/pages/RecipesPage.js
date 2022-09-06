import { useEffect } from 'react';
import MyRecipes from '../components/MyRecipes';
import Recipes from '../components/Recipes';
import { getSavedRecipes } from '../services/recipeService'
import { useAppContext } from '../context/appContext';

const RecipesPage = () => {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        getSavedRecipes(state.user.uid).then((docs) => dispatch({ 
            type: 'loadSavedRecipes',
            payload: { docs },
        }));
    }, []);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12 col-lg-2">
                    <p>My Fridge</p>
                </div>
                <div className="col-12 col-lg-8">
                    <Recipes />
                </div>
                <div className="col-12 col-lg-2">
                    <MyRecipes />
                </div>
            </div>
        </div>
    );
}

export default RecipesPage;