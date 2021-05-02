import React from 'react'
import './RecipeCardDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecipeCardDetail = ({ label, image, ingredients, servings, totalTime, dietLabel, sodium, cholesterol, fiber, sugar, fat, saturatedFat, carbs, calories, proteins, allergyFilter, url }) => {
    
    return (

        <div className='recipe-card-detail'>
            <div className='headSection'>
                <h2 className='labelDetail'>{label}</h2>
                <img src={image} alt={label} className='recipeImageDetail' />
                <p><FontAwesomeIcon icon="utensils" className='recipe-icon' /> Servings: {servings} </p>
                <p><FontAwesomeIcon icon="stopwatch" className='recipe-icon' /> Total time: {totalTime}</p>
                <p><FontAwesomeIcon icon="cubes" className='recipe-icon' /> Calories: {calories}</p>
                { dietLabel.length > 0 && <p><FontAwesomeIcon icon="balance-scale" className='recipe-icon' /> Diet Label: {dietLabel}</p> }
            </div>
            <div className='ingredientsLines'>
            <p><FontAwesomeIcon icon="shopping-basket" className='recipe-icon' />{ingredients}</p>
            <p><FontAwesomeIcon icon="book" className='recipe-icon' /> Directions: <a href={url} target='_blank'> <span className='directions'>Click here</span> </a></p>
            </div>
            <div className='nutritionInfos'>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Cholesterol: {cholesterol}mg</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Sodium: {sodium}mg</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Fiber: {fiber}g</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Sugar: {sugar}g</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Carbs: {carbs}g</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Proteins: {proteins}g</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Fat: {fat}g</p>
                <p><FontAwesomeIcon icon="chart-pie" className='recipe-icon' /> Saturated fat: {saturatedFat}g</p>
            </div>
            <div className='healthInfos'>
                <p><FontAwesomeIcon icon="check-double" className='recipe-icon' /> Health Labels: {allergyFilter}</p>
                
            </div>
        </div>
    )
}

export default RecipeCardDetail
