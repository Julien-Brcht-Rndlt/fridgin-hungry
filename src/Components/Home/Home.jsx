import React, { useState } from 'react'
import './Home.css'
import RecipeResults from '../RecipeResults/RecipeResults'
import FadeSlideshow from './FadeSlideshow'
import NavPlateButton from './NavPlateButton'
import MealsDisplay from './MealsDisplay'

const Home = ({ setSearchResults }) => {

    return (
        <div className="home flex-col-container">
                <FadeSlideshow easing={'ease-in'} duration={2000}/>
            <div className='start-container'>
                <NavPlateButton title={'Empty your Fridge!'} sentences={['Great recipe ideas', 'Zero Waste', '100% Tasty']} target={'filters'}/>
            </div>
                
            <div id="filters" className="filters-container">
                <RecipeResults setSearchResults={setSearchResults}/>
            </div>
                <MealsDisplay />           
        </div>
    )
}

export default Home
