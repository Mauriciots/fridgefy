import MyRecipes from '../components/MyRecipes';
import Recipes from '../components/Recipes';

const RecipesPage = () => {
    return (
        <div className="container">
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