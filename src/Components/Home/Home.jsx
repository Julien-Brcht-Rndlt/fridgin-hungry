import React, { useState } from 'react'
import './Home.css'
import IngredientFilter from '../Filters/IngredientFilter'
import RecipeCards from '../RecipeCards/RecipeCards'
import CalorieFilter from '../Filters/CalorieFilter'

import { ReactComponent as NounPlate1 } from './noun_Plate_3498787.svg'

const Home = () => {
    const [searchResults, setSearchResults] = useState([])

    const imageSrc = ['/salad-bowl.png', '/salad-meal-2.png', "/cheese.png"];

    return (
        <div className="home  flex-col-container">
            <div className="whitesmoke-bg start-container">
                <div className="top-container"><img src={imageSrc[0]} alt={'second salad meal'} /></div>
                <div className="empty-fridge flex-col-container">
                    <h2>Empty you Fridge!</h2>
                    <div className="description flex-col-container">
                        <p>Great recipe ideas</p>
                        <p>Zero Waste</p>
                        <p>100% Tasty</p>
                    </div>
                </div>
                <div className="middle-container"><img src={imageSrc[2]} alt={'second salad meal'} /></div>               
            </div>

            <div className="beige-bg">
                <CalorieFilter setSearchResults={setSearchResults} />
                <IngredientFilter setSearchResults={setSearchResults}/>
                <RecipeCards searchResults={searchResults} />
            </div>

            <div className="bottom-container whitesmoke-bg">
            <img src={imageSrc[1]} alt={'third salad meal'} />
            </div>
        
        </div>
    )
}

export default Home
