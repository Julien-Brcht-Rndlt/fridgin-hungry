import React, { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./RecipeCards.css"
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'
import CardAnim from './CardAnim'

const RecipeCards = ({ match, searchResults }) => {

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
            <Link to='/recipes'>
                <RecipeCardDetail
                    label={cardDetail.label}
                    image={cardDetail.image}
                    servings={cardDetail.yield}
                    totalTime={cardDetail.totalTime}
                    calories={(cardDetail.calories).toFixed(2)}
                    allergyFilter={(cardDetail.healthLabels).map((label, i) => <li key={i}>{label}</li>)}
                    dietLabel={cardDetail.dietLabels}
                    cholesterol={(cardDetail.totalNutrients.CHOLE.quantity).toFixed(2)}
                    sodium={(cardDetail.totalNutrients.NA.quantity).toFixed(2)}
                    fiber={(cardDetail.totalNutrients.FIBTG.quantity).toFixed(2)}
                    Sugar={(cardDetail.totalNutrients.SUGAR.quantity).toFixed(2)}
                    carbs={(cardDetail.totalNutrients.CHOCDF.quantity).toFixed(2)}
                    proteins={(cardDetail.totalNutrients.PROCNT.quantity).toFixed(2)}
                    fat={(cardDetail.totalNutrients.FAT.quantity).toFixed(2)}
                    saturatedFat={(cardDetail.totalNutrients.FASAT.quantity).toFixed(2)}
                    ingredients={(cardDetail.ingredientLines).map((ingredient, i) => <li key={i}>{ingredient}</li>)} 
                    url={cardDetail.url}/>
            </Link>
            }

            {     
                searchResults.map((card, index) => 
                    <HashLink to={`/recipes/${index}#card-detail`} scroll={(element) => element.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })}>
                        { (!showCardDetail || cardId !== index) &&
                            <CardAnim rotation={5} timing={150}>
                                <RecipeCard
                                    key={index}
                                    label={card.label}
                                    image={card.image}
                                    servings={card.yield}
                                    totalTime={card.totalTime}
                                    dietLabel={card.dietLabels}
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