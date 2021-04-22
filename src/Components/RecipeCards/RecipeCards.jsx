import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import IngredientFilter from '../Filters/IngredientFilter'
//import 'RecipeCards.css'

const RecipeCards = ({ searchResults }) => {
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

export default RecipeCards
