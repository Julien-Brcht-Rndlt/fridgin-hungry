import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './Home.css'
import RecipeResults from '../RecipeResults/RecipeResults'

const Home = ({ setSearchResults }) => {

    const imageSrc = ['/salad-meal-1.jpg', '/salad-meal-2.png']

    return (
    <div className='home  flex-col-container'>
        <div className='top-container'><img src={imageSrc[0]} alt={'second salad meal'} />
        </div>
        <div className='whitesmoke-bg start-container'>
            <HashLink to='#filters' scroll={(element) => element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})}>
                <div className='empty-fridge flex-col-container'>
                    <h2>Empty you Fridge!</h2>
                    <div className='description flex-col-container'>
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
                <img src={imageSrc[2]} alt={'1st meal sample'} className="img-first-child" />
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
