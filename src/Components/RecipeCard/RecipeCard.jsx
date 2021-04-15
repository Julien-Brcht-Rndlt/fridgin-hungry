import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ label, image, ingredients }) => {
    return (
        <div>
            <h3 className="name">{label}</h3>
            <img src={image} alt={label} />
            <p>{ingredients}</p>
        </div>
    )
}

export default RecipeCard
