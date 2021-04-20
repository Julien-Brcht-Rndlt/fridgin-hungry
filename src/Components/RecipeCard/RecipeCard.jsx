import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ label, image, ingredients }) => {
    return (
        <div className="recipe-card">
            <h2 className="label">{label}</h2>
            <img src={image} alt={label} className="recipeImage" />
            <p className="ingredientsLines">{ingredients}</p>
        </div>
    )
}

export default RecipeCard
