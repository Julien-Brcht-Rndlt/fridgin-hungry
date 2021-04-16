import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ label, image, ingredients }) => {
    return (
        <div className="recipeCard">
            <h2 className="label">{label}</h2>
            <img src={image} alt={label} className="recipeImage" />
            <p className="ingredientsLines">{ingredients}</p>
        </div>
    )
}

export default RecipeCard
