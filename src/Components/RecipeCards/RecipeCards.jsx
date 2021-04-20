import React from 'react'
import { Link } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import IngredientFilter from '../Filters/IngredientFilter'
import './RecipeCards.css'

const RecipeCards = ({ searchResults, id }) => {
    console.log(searchResults)
    return (
        <>
        <div>
            <Link to='/'>Back</Link>
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
        </>
    )
}

export default RecipeCards
