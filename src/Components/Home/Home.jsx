import React, { useState } from 'react'

import { HashLink } from 'react-router-hash-link'

import './Home.css'

import RecipeCards from '../RecipeCards/RecipeCards'
import RecipeResults from "../RecipeResults/RecipeResults"

import { ReactComponent as NounPlate1 } from './noun_Plate_3498787.svg'

const Home = ({ searchResults, setSearchResults }) => {

    const imageSrc = ['/cooking.jpg', 'meal-3.png', 'meal-1.png', 'meal-2.png'] //passer en state si défilement de photos ??
    const startTitles = ['Empty your Fridge!', 'Fill your Plate :)']

    const [startTitle, setStartTitle] = useState(startTitles[0])

    return (
    <div className="home  flex-col-container">
        <div className="top-container">
        </div>
        <div className="whitesmoke-bg start-container">
            <HashLink to="#filters" scroll={(element) => element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})}>
                <div className="empty-fridge flex-col-container">
                    <div>
                        <h2>{startTitle}</h2>
                    </div>
                    <div className="description flex-col-container">
                        <p>Great recipe ideas</p>
                        <p>Zero Waste</p>
                        <p>100% Tasty</p>
                    </div> 
                </div>
            </HashLink>
        </div>
             
        <div id="filters" className="filters-container beige-bg">
                <RecipeResults setSearchResults={setSearchResults}/>       
        </div>
        <div className="bottom-container whitesmoke-bg">
            <div>
                <img src={imageSrc[2]} alt={'1st meal sample'} />
            </div>
            <div>
                <img src={imageSrc[3]} alt={'2nd meal sample'} />
            </div>
            <div>
                <img src={imageSrc[1]} alt={'3th meal sample'} />
            </div>
            
        </div>
        
    </div>
    )
}

export default Home
