import React, { useState } from 'react'
import './Home.css'
import IngredientFilter from '../Filters/IngredientFilter'
import RecipeResults from '../RecipeResults/RecipeResults'
import CalorieFilter from '../Filters/CalorieFilter'

const Home = () => {
    const [searchResults, setSearchResults] = useState([])

    return (
        <div className="home">
            <div className="whitesmoke-bg">
                <div className="description-text">
                    <p>Great recipe ideas</p>
                    <p>Zero Waste</p>
                    <p>100% Tasty</p>
                </div>
                <div className="emptyFridge">
                    <h2>Empty your fridge!</h2>
                </div>
            </div>

            <div className="beige-bg">
                <CalorieFilter />
                <IngredientFilter setSearchResults={setSearchResults} />
                <RecipeResults searchResults={searchResults} />
            </div>
        </div>
    )
}

export default Home
