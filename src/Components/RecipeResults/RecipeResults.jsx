import React, { useState } from 'react'
import axios from 'axios'
import IngredientFilter from '../Filters/IngredientFilter'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import RecipeCards from '../RecipeCards/RecipeCards'
import "./RecipeResults.css"
import { Link } from "react-router-dom"

const RecipeResults = ({ setSearchResults = [] }) => {
    const [searchUrl, setSearchUrl] = useState(`https://api.edamam.com/search?app_id=f604900f&app_key=b523b505a718166bca1753372a51616f&q=`);

    // const finalUrl = urlIngredients
    const handleClick = () => {
        console.log('filter1:' + searchUrl);
        axios
            .get(searchUrl)
            .then((response) => response.data)
            .then((data) => {
                setSearchResults(data.hits)
            })
    }
    return (
        <div className="filterContainer">
            <div className="RecipeResults">
                <IngredientFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} >Ingredients</IngredientFilter>
                <CalorieFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} >Macros</CalorieFilter>
                <AllergiesFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} >Health</AllergiesFilter>
            </div>
            <div>
                <Link to='/recipes'>
                    <button className="action-button" onClick={handleClick}>Get recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeResults;