import React from 'react'
import { Link } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeCards.css'

const RecipeCards = ({ searchResults, id }) => {
    console.log(searchResults)
    return (
        <div className="recipe-cards">
        <div>
            <Link to='/'><button className="nav-button">Back</button></Link>
        </div>
        {searchResults.map((card, index) => (
                <RecipeCard
                    key={index}
                    label={card.recipe.label}
                    image={card.recipe.image}
                    ingredients={card.recipe.ingredientLines}
                />
            ))}
        </div>
    )
}

export default RecipeCards