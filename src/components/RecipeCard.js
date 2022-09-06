import { FaBookmark } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { useAppContext } from '../context/appContext'; 
import { truncateRecipeTitle } from '../shared/utils'; 
import { addRecipe } from '../services/recipeService'

const RecipeCard = ({ recipe, landingPage }) => {
    const { state, dispatch } = useAppContext();

    const bookmarkRecipe = (recipe) => {
        addRecipe(recipe, state.user.uid).then(docId => {
            const newRecipe = {
                ...recipe,
                docId,
            };
            dispatch({ type: 'addRecipe', payload: { newRecipe } });
        });
    }

    const isDisabled = (recipeId) => {
        return state.recipes.some(r => r.id === recipeId);
    }

    return (
        <div className="w-25 p-1" key={recipe.id}>
            <Card>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title style={{ height: '3rem' }}>{truncateRecipeTitle(recipe.title)}</Card.Title>
                    <Card.Text className="d-flex justify-content-end">
                        {!isDisabled(recipe.id) && !landingPage && (
                            <FaBookmark
                                style={{ cursor: 'pointer' }}
                                className="text-success"
                                onClick={() => bookmarkRecipe(recipe)}
                            />
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecipeCard;
