import React, {useState, useEffect} from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link,  useParams } from 'react-router-dom'
import "./RecipeCards.css"
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'
import CardAnim from './CardAnim'



const RecipeCards = ({ match, searchResults }) => {
    const interval = 3;
    const start = 0;

    const [end, setEnd] = useState(interval);
    const [cardsToRender, setCardsToRender] = useState([]);

    useEffect(() => {
        setCardsToRender(searchResults.slice(start, end)); // slice return all the values between start and end exclusively 
    }, [searchResults, end])

    const onClickHandler = () => {
        setEnd((prevEnd) => prevEnd + interval); // when user clicks on view more, end should increase by interval based on the previous end.
      };

    const id = match && parseInt(match.params.id);
    console.log("id : " + id);

    return (
        <div>
            {/* <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div> */}
            <div className="recipe-cards">
                {cardsToRender.map((card, index) => {
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
            <button onClick={onClickHandler}>View More</button>
        </div>
    )
}

export default RecipeCards