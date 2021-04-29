import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link,  useParams } from 'react-router-dom'
import "./RecipeCards.css"
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'
import CardAnim from './CardAnim'

const RecipeCards = ({ match, searchResults }) => {

   /*  const { id } = useParams();
    console.log("id : " + id); */

    const id = match && parseInt(match.params.id);
    console.log("id : " + id);

    return (
        <div>
            {/* <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div> */}
            <div className="recipe-cards">
                {searchResults.map((card, index) => {
                    console.log("here: " + id)
                    return (
                    (id !== undefined && id === index) 
                    ?<RecipeCardDetail 
                        label={card.recipe.label}
                        image={card.recipe.image}
                        servings={card.recipe.yield}
                        totalTime={card.recipe.totalTime}
                        calories={(card.recipe.calories).toFixed(2)}
                        allergyFilter={(card.recipe.healthLabels).map((label, i) => <li key={i}>{label}</li>)}
                        dietLabel={card.recipe.dietLabels}
                        cholesterol={(card.recipe.totalNutrients.CHOLE.quantity).toFixed(2)}
                        sodium={(card.recipe.totalNutrients.NA.quantity).toFixed(2)}
                        fiber={(card.recipe.totalNutrients.FIBTG.quantity).toFixed(2)}
                        Sugar={(card.recipe.totalNutrients.SUGAR.quantity).toFixed(2)}
                        carbs={(card.recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}
                        proteins={(card.recipe.totalNutrients.PROCNT.quantity).toFixed(2)}
                        fat={(card.recipe.totalNutrients.FAT.quantity).toFixed(2)}
                        saturatedFat={(card.recipe.totalNutrients.FASAT.quantity).toFixed(2)}
                        ingredients={(card.recipe.ingredientLines).map((ingredient, i) => <li key={i}>{ingredient}</li>)} 
                        url={card.recipe.url}/> 
                    : <Link to={`/recipes/${index}`}>
                        <CardAnim rotation={5} timing={150}>
                            <RecipeCard
                            key={index}
                            label={card.recipe.label}
                            image={card.recipe.image}
                            servings={card.recipe.yield}
                            totalTime={card.recipe.totalTime}
                            dietLabel={card.recipe.dietLabels}
                            />
                        </CardAnim>
                    </Link>
                    )}
                
                )}
            </div>
        </div>
    )
}

export default RecipeCards