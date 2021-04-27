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
                <p>Servings: {servings} </p>
                <p>Total time: {totalTime}</p>
                <p>Calories: {calories}</p>
            </div>
            <div className='dietInfos'>
                <p>Health Labels: {allergyFilter}</p>
                <p>Diet Label: {dietLabel}</p>
            </div>
            <div className='nutritionInfos'>
                <p>Cholesterol: {cholesterol}mg</p>
                <p>Sodium: {sodium}mg</p>
                <p>Fiber: {fiber}g</p>
                <p>Sugar: {sugar}g</p>
                <p>Carbs: {carbs}g</p>
                <p>Fat: {fat}g</p>
                <p>Saturated fat: {saturatedFat}g</p>
            </div>
            <p className='ingredientsLines'>{ingredients}</p>
        </div>
    )
}

export default RecipeCardDetail
