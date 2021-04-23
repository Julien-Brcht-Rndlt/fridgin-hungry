import React, { useState } from 'react'

import { HashLink } from 'react-router-hash-link'

import './Home.css'

import RecipeCards from '../RecipeCards/RecipeCards'
import RecipeResults from "../RecipeResults/RecipeResults"

import { ReactComponent as NounPlate1 } from './noun_Plate_3498787.svg'

const Home = ({ searchResults, setSearchResults }) => {

    const imageSrc = ['/salad-bowl.png', '/salad-meal-2.png', "/cheese.png"];

    return (
    <div className="home  flex-col-container">
        <div className="top-container"><img src={imageSrc[0]} alt={'second salad meal'} />
        </div>
        <div className="whitesmoke-bg start-container">
            <HashLink to="#filters" scroll={(element) => element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>
                <div className="empty-fridge flex-col-container">
                    <h2>Empty you Fridge!</h2>
                    <div className="description flex-col-container">
                        <p>Great recipe ideas</p>
                        <p>Zero Waste</p>
                        <p>100% Tasty</p>
                    </div>
                </div>
            </HashLink>
        </div>          
        <div className="filters-container beige-bg">
                <RecipeResults setSearchResults={setSearchResults}/>
                <RecipeCards searchResults={searchResults}/>       
        </div>
        <div className="bottom-container whitesmoke-bg">
            <img src={imageSrc[1]} alt={'third salad meal'} />
        </div>
        
    </div>
    )
}

export default Home
