import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ label, image, servings, totalTime, dietLabel }) => {
    return (
        <div className='recipe-card'>
            <h3 className='label'>{label}</h3>
            <img src={image} alt={label} className='recipeImage' />
            <p className='servings'>Servings: {servings}</p>
            <p className='totalTime'>Total time: {totalTime}</p>
            <p className='dietLabel'>Diet label: {dietLabel}</p>
        </div>
    )
}

export default RecipeCard
