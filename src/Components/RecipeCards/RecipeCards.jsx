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

    return (
        <div>
            {/* <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div> */}
            <div className="recipe-cards">
                {searchResults.map((recipe, index) => {
                    return(
                      (id !== undefined && id === index) 
                        ?<RecipeCardDetail 
                            label={recipe.label}
                            image={recipe.image}
                            servings={recipe.yield}
                            totalTime={recipe.totalTime}
                            calories={(recipe.calories).toFixed(2)}
                            allergyFilter={(recipe.healthLabels).map((label, i) => <li key={i}>{label}</li>)}
                            dietLabel={recipe.dietLabels}
                            cholesterol={(recipe.totalNutrients.CHOLE.quantity).toFixed(2)}
                            sodium={(recipe.totalNutrients.NA.quantity).toFixed(2)}
                            fiber={(recipe.totalNutrients.FIBTG.quantity).toFixed(2)}
                            Sugar={(recipe.totalNutrients.SUGAR.quantity).toFixed(2)}
                            carbs={(recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}
                            proteins={(recipe.totalNutrients.PROCNT.quantity).toFixed(2)}
                            fat={(recipe.totalNutrients.FAT.quantity).toFixed(2)}
                            saturatedFat={(recipe.totalNutrients.FASAT.quantity).toFixed(2)}
                            ingredients={(recipe.ingredientLines).map((ingredient, i) => <li key={i}>{ingredient}</li>)} 
                            url={recipe.url}/> 
                        : <Link to={`/recipes/${index}`}>
                            <CardAnim rotation={5} timing={150}>
                                <RecipeCard
                                key={index}
                                label={recipe.label}
                                image={recipe.image}
                                servings={recipe.yield}
                                totalTime={recipe.totalTime}
                                dietLabel={recipe.dietLabels}
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