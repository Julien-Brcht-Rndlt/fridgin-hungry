import React, { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./RecipeCards.css"
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'
import CardAnim from './CardAnim'

const RecipeCards = ({ searchResults }) => {

    const { id } = useParams()
    const cardId = id ? parseInt(id) : undefined
    
    const showCardDetail = cardId !== undefined && searchResults
    const cardDetail =  showCardDetail ? searchResults[cardId] : undefined

    return (
        <div>
            {/* <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div> */}
            <div className="recipe-cards">

            { showCardDetail &&
               
                <RecipeCardDetail
                    label={cardDetail.recipe.label}
                    image={cardDetail.recipe.image}
                    servings={cardDetail.recipe.yield}
                    totalTime={cardDetail.recipe.totalTime}
                    calories={(cardDetail.recipe.calories).toFixed(2)}
                    allergyFilter={(cardDetail.recipe.healthLabels).map((label, i) => <li key={i}>{label}</li>)}
                    dietLabel={cardDetail.recipe.dietLabels}
                    cholesterol={(cardDetail.recipe.totalNutrients.CHOLE.quantity).toFixed(2)}
                    sodium={(cardDetail.recipe.totalNutrients.NA.quantity).toFixed(2)}
                    fiber={(cardDetail.recipe.totalNutrients.FIBTG.quantity).toFixed(2)}
                    Sugar={(cardDetail.recipe.totalNutrients.SUGAR.quantity).toFixed(2)}
                    carbs={(cardDetail.recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}
                    proteins={(cardDetail.recipe.totalNutrients.PROCNT.quantity).toFixed(2)}
                    fat={(cardDetail.recipe.totalNutrients.FAT.quantity).toFixed(2)}
                    saturatedFat={(cardDetail.recipe.totalNutrients.FASAT.quantity).toFixed(2)}
                    ingredients={(cardDetail.recipe.ingredientLines).map((ingredient, i) => <li key={i}>{ingredient}</li>)} 
                    url={cardDetail.recipe.url}/>
              
            }

            {     
                searchResults.map((card, index) => 
                    <HashLink to={`/recipes/${index}#card-detail`} scroll={(element) => element.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })}>
                        { (!showCardDetail || cardId !== index) &&
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
                        }
                    </HashLink>)
                }
            </div>
        </div>
    )
}

export default RecipeCards