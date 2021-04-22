import React, { useState} from 'react'
import axios from 'axios'
import IngredientFilter from '../Filters/IngredientFilter'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import RecipeCards from '../RecipeCards/RecipeCards'
import "./RecipeResults.css"

const RecipeResults = ({ setSearchResults }) => {
    const [searchUrl, setSearchUrl] = useState(`https://api.edamam.com/search?app_id=f604900f&app_key=b523b505a718166bca1753372a51616f`);
    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('https://api.edamam.com/search?&calories=12&hilho&niii')

    // const finalUrl = urlIngredients
    const handleClick = () => {
        console.log(searchUrl);
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
                <IngredientFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl}/>
                <CalorieFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl}/> 
                <AllergiesFilter searchUrl={searchUrl} setSearchUrl={setSearchUrl}/>
            </div>
            <div>
            <button className="action-button" onClick={handleClick}>Get recipes</button>
            </div>
        </div>
    );
};

export default RecipeResults;