<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/RecipeCards/RecipeCards.jsx
import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import "./RecipeCards.css"

const RecipeCards = ({ searchResults }) => {
========
import React, { useState } from 'react'
import axios from 'axios'
import IngredientFilter from '../Filters/IngredientFilter'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import RecipeCards from '../RecipeCards/RecipeCards'
import "./RecipeResults.css"

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

>>>>>>>> dev:src/Components/RecipeResults/RecipeResults.jsx
    return (
        <div className="filterContainer">
            <div className="RecipeResults">
                <IngredientFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
                <CalorieFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
                <AllergiesFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
            </div>
            <div>
                <button className="action-button" onClick={handleClick}>Get recipes</button>
            </div>
        </div>
    );
};

<<<<<<<< HEAD:src/Components/RecipeCards/RecipeCards.jsx
export default RecipeCards
========
export default RecipeResults;
>>>>>>>> dev:src/Components/RecipeResults/RecipeResults.jsx
=======
import React from 'react'
import { Link } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeCards.css'

const RecipeCards = ({ searchResults, id }) => {
    console.log(searchResults)
    return (
        <div className="recipe-cards">
        <div>
            <Link to='/'><button className="nav-button">Back</button></Link>
        </div>
        {searchResults.map((card, index) => (
                <RecipeCard
                    key={index}
                    label={card.recipe.label}
                    image={card.recipe.image}
                    ingredients={card.recipe.ingredientLines}
                />
            ))}
        </div>
    )
}

export default RecipeCards
>>>>>>> dev
