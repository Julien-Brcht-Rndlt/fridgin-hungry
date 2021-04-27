import React from 'react'
import './RecipeCardDetail.css'

const RecipeCardDetail = ({ label, image, ingredients, servings, totalTime, dietLabel, sodium, cholesterol, fiber, sugar, fat, saturatedFat, carbs, calories, allergyFilter }) => {
    
    return (

        <div className='recipe-card-detail'>
            <div className='headSection'>
                <h2 className='label'>{label}</h2>
                <img src={image} alt={label} className='recipeImage' />
            </div>
            <div className='quickInfos'>
                <span>Servings: {servings} </span>
                <span>Total time: {totalTime}</span>
                <span>Calories: {calories}</span>
            </div>
            <div className='dietInfos'>
                <span>Health Labels: {allergyFilter}</span>
                <span>Diet Label: {dietLabel}</span>
            </div>
            <div className='nutritionInfos'>
                <span>Cholesterol: {cholesterol}</span>
                <span>Sodium: {sodium}mg</span>
                <span>Fiber: {fiber}g</span>
                <span>Sugar: {sugar}g</span>
                <span>Carbs: {carbs}g</span>
                <span>Fat: {fat}g</span>
                <span>Saturated fat: {saturatedFat}g</span>
            </div>
            <p className='ingredientsLines'>{ingredients}</p>
        </div>
    )
}

export default RecipeCardDetail
