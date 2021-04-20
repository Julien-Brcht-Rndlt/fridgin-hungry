import React, { useState } from 'react'
import './Home.css'
import IngredientFilter from '../Filters/IngredientFilter'
import RecipeResults from '../RecipeResults/RecipeResults'

const Home = () => {
    const [searchResults, setSearchResults] = useState([])

    const imageSrc = ['/salad-meal.jpg', '/salad-meal-2.png'];

    return (
        <div className="home">
            <div className="whitesmoke-bg grid-container">
                <div></div>
                <div className="description-text">
                    <p>Great recipe ideas</p>
                    <p>Zero Waste</p>
                    <p>100% Tasty</p>
                </div>
                <div><img src={imageSrc[0]} alt={'first salad meal'} /></div>
                <div><img src={imageSrc[1]} alt={'second salad meal'} /></div>
                <div>
                <div className="emptyFridge">
                    <h2>Empty your fridge!</h2>
                </div>
                </div>
                <div></div>
            </div>

            <div className="beige-bg">
                <IngredientFilter setSearchResults={setSearchResults} />
                <RecipeResults searchResults={searchResults} />
            </div>
        </div>
    )
}

export default Home
