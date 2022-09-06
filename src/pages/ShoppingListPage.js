import RecipesAccordion from '../components/RecipesAccordion'

const ShoppingListPage = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12 col-lg-2">
                    <p>My Fridge</p>
                </div>
                <div className="col-12 col-lg-8">
                    <RecipesAccordion />
                </div>
                <div className="col-12 col-lg-2">
                    <p>Items to buy</p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListPage;