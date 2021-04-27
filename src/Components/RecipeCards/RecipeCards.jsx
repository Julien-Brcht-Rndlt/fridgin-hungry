import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link,  useParams } from 'react-router-dom'
import "./RecipeCards.css"
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'

const RecipeCards = ({ match, searchResults }) => {

   /*  const { id } = useParams();
    console.log("id : " + id); */

    const id = match && parseInt(match.params.id);
    console.log("id : " + id);

    return (
        <div>
            <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div>
            <div className="recipe-cards">
                {searchResults.map((card, index) => {

                    console.log("here: " + id)

                    return (
                    (id !== undefined && id === index) 
                    ? <RecipeCardDetail 
                        label={card.recipe.label}
                        image={card.recipe.image}
                        servings={card.recipe.yield}
                        totalTime={card.recipe.totalTime}
                        calories={(card.recipe.calories)}
                        allergyFilter={card.recipe.healthLabels}
                        dietLabel={card.recipe.dietLabels}
                        cholesterol={card.recipe.totalNutrients.CHOLE.quantity}
                        ingredients={card.recipe.ingredientLines} /> 
                    : <Link to={`/recipes/${index}`}><RecipeCard
                        key={index}
                        label={card.recipe.label}
                        image={card.recipe.image}
                        ingredients={card.recipe.ingredientLines}
                    /></Link>
                    )}
                
                )}
            </div>
        </div>
    )
}

export default RecipeCards