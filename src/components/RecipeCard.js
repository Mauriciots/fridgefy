import { FaBookmark } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="w-25 p-1" key={recipe.id}>
            <Card>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title style={{ height: '3rem' }}>{recipe.title}</Card.Title>
                    <Card.Text className="d-flex justify-content-end">
                        <FaBookmark className="cursor-pointer" />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecipeCard;
