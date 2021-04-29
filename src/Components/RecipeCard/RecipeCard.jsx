import React from 'react'
import './RecipeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecipeCard = ({ label, image, servings, totalTime, dietLabel }) => {
    return (
        <div className='recipe-card'>
            <h3 className='label'>{label}</h3>
            <img src={image} alt={label} className='recipeImage' />
            <p className='servings'><FontAwesomeIcon icon="utensils" /> Servings: {servings}</p>
            <p className='totalTime'><FontAwesomeIcon icon="stopwatch" /> Total time: {totalTime}min</p>
            <p className='dietLabel'><FontAwesomeIcon icon="balance-scale" /> Diet label: {dietLabel}</p>
        </div>
    )
}

export default RecipeCard
