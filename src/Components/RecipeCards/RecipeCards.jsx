import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link } from 'react-router-dom'
import "./RecipeCards.css"

const RecipeCards = ({ searchResults = [], id }) => {
    console.log(searchResults)
    return (
        <div>
            <div>
                <Link to='/'><button className="nav-button">Back</button></Link>
            </div>
            <div className="recipe-cards">
                {searchResults.map((card, index) => (
                    <RecipeCard
                        key={index}
                        label={card.recipe.label}
                        image={card.recipe.image}
                        ingredients={card.recipe.ingredientLines}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecipeCards