import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import "./RecipeResults.css"
//import 'RecipeResults.css'

const RecipeResults = ({ searchResults }) => {
    return (
        <div className="recipeResults">
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

export default RecipeResults
