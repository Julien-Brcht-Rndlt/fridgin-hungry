import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './Home.css'
import RecipeResults from '../RecipeResults/RecipeResults'
import SwingAnim from './SwingAnim'

const Home = ({ setSearchResults }) => {

    const imageSrc = ['/meal-1.png', '/meal-2.png', '/meal-3.png']

    return (
    <div className="home  flex-col-container">
        <div className="top-container">
        </div>
        <div className='whitesmoke-bg start-container'>
                <HashLink to='#filters' scroll={(element) => element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})}>
                    <SwingAnim rotation={30} timing={200}>
                    <div className='empty-fridge flex-col-container'>
                        <h2>Empty you Fridge!</h2>
                        <div className='description flex-col-container'>
                            <p>Great recipe ideas</p>
                            <p>Zero Waste</p>
                            <p>100% Tasty</p>
                        </div> 
                    </div>
                    </SwingAnim>
                </HashLink>
        </div>
             
        <div id="filters" className="filters-container beige-bg">
                <RecipeResults setSearchResults={setSearchResults}/>       
        </div>
        <div className="bottom-container whitesmoke-bg">
            <div>
                <img src={imageSrc[0]} alt={'1st meal sample'} className="img-first-child" />
            </div>
            <div>
                <img src={imageSrc[1]} alt={'2nd meal sample'} />
            </div>
            <div>
                <img src={imageSrc[2]} alt={'3th meal sample'} />
            </div>
            
        </div>
    </div>
    )
}

export default Home
