import React, { useState } from 'react'
import './Home.css'
import RecipeResults from '../RecipeResults/RecipeResults'
import Carousel from './Carousel'
import NavPlateButton from './NavPlateButton'
import MealsDisplay from './MealsDisplay'

const Home = ({ setSearchResults }) => {

    return (
        <div className="home flex-col-container">
                <Carousel duration={25} delay={15} isInfinite={true} />
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
