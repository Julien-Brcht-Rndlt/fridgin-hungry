import React, { useState } from 'react'
import axios from 'axios'
import IngredientFilter from '../Filters/IngredientFilter'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import FilterDisplay from '../Filters/FilterDisplay'
import RecipeCards from '../RecipeCards/RecipeCards'
import './RecipeResults.css'
import { Link } from 'react-router-dom'

const RecipeResults = ({ searchUrl, setSearchUrl, setSearchResults = [] }) => {

    const prepTimes = [15, 30, 45, 60]
    const randomPrepTime = () => prepTimes[Math.floor(Math.random() * 4)]

    const handleClick = () => {
        axios
            .get(searchUrl)
            .then((response) => response.data)
            .then((data) => {
                const recipeProperties = ['label', 'image', 'yield', 'totalTime', 'calories', 'healthLabels', 'dietLabels', 'totalNutrients', 'ingredientLines', 'url']
                let recipes = []
                data.hits.map((recipeData) => {
                    const recipe = {}
                    recipeProperties.forEach((property) => {
                        recipe[property] = recipeData['recipe'][property]
                    })
                    recipe.totalTime = recipe.totalTime !== 0 ? recipe.totalTime : randomPrepTime()
                    recipes = [...recipes, recipe]
                })
                setSearchResults(recipes)
            })
    }

    return (
        <div className='filterContainer'>
            <div className='recipeResults'>
                <FilterDisplay title={'Ingredients'}>
                    <IngredientFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
                </FilterDisplay>

                <FilterDisplay title={'Macros'}>
                    <CalorieFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
                </FilterDisplay>

                <FilterDisplay title={'Health'}>
                    <AllergiesFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
                </FilterDisplay>
            </div>
            <div>
                <Link to='/recipes'>
                    <button className='action-button' onClick={handleClick}>Get recipes</button>
                </Link>
            </div>
        </div>
    )
}

export default RecipeResults