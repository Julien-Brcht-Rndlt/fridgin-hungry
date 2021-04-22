import React, { useState } from 'react'
import './Home.css'
import IngredientFilter from '../Filters/IngredientFilter'
import RecipeCards from '../RecipeCards/RecipeCards'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import RecipeResults from "../RecipeResults/RecipeResults"

import { ReactComponent as NounPlate1 } from './noun_Plate_3498787.svg'

const Home = ({searchResults}) => {
    

    const imageSrc = ['/salad-meal-1.jpg', '/salad-meal-2.png'];

    return (
        <div className="home  flex-col-container">
            <div className="top-container"><img src={imageSrc[0]} alt={'second salad meal'} /></div>
            <div className="whitesmoke-bg start-container">
                <div></div>
                <div className="empty-fridge flex-col-container">
                    <h2>Empty you Fridge!</h2>
                    <div className="description flex-col-container">
                        <p>Great recipe ideas</p>
                        <p>Zero Waste</p>
                        <p>100% Tasty</p>
                    </div> 
                </div>
                <div>
                </div>               
            </div>

            <div className="beige-bg">
                <RecipeResults />
                
            </div>

            <div className="bottom-container whitesmoke-bg">
            <img src={imageSrc[1]} alt={'third salad meal'} />
            </div>
        
        </div>
    )
}

export default Home
