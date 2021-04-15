import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import IngredientFilter from '../Filters/IngredientFilter'
import 'RecipeResults.css'

const RecipeResults = ({ searchResults }) => {
    return (
        <div>
            {searchResults.map((card) => (
                <RecipeCard
                    key={index}
                    label={recipe.label}
                    image={recipe.image}
                    ingredients={recipe.ingredientLines}
                />
            ))}
        </div>
    )
}

export default RecipeResults
