import { useEffect } from 'react';
import { getSavedRecipes } from '../services/recipeService';
import { useAppContext } from '../context/appContext'
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image'

const RecipesAccordion = () => {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        getSavedRecipes(state.user.uid).then((docs) => dispatch({ 
            type: 'loadSavedRecipes',
            payload: { docs },
        }));
    }, []);

    if (!state.recipes?.length) {
       return (
            <Alert variant="warning">
                Nothing to display here
            </Alert>
       )
    }

    return (
        <Accordion defaultActiveKey={state.recipes[0].id}>
            {state.recipes.map(recipe => (
                <Accordion.Item eventKey={recipe.id} key={recipe.id}>
                    <Accordion.Header>{recipe.title}</Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex">
                            <div>
                                <Image src={recipe.image} alt={recipe.title} rounded />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} className="px-4" />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default RecipesAccordion;