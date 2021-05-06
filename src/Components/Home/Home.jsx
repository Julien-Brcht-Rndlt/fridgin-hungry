import React, { useEffect } from 'react'
import './Home.css'
import RecipeResults from '../RecipeResults/RecipeResults'
import FadeSlideshow from './FadeSlideshow'
// import NavPlateButton from './NavPlateButton'
import MealsDisplay from './MealsDisplay'
// import SwingAnim from './SwingAnim'

const Home = ({ searchUrl, setSearchUrl, setHasToken, setSearchResults }) => {

    useEffect(() => {
        setHasToken(true)
    })

    return (
        <div className='home flex-col-container'>
            <FadeSlideshow easing={'ease-in'} duration={2000} />
            {/* <div className='start-container'> */}
                {/* <SwingAnim scale={0.9} timing={150}>
                    <NavPlateButton title={'Empty your Fridge!'} sentences={['Great recipe ideas', 'Zero Waste', '100% Tasty']} target={'filters'} />
                </SwingAnim> */}
            {/* </div> */}

            <div id='filters' className='filters-container'>
                <RecipeResults searchUrl={searchUrl} setSearchUrl={setSearchUrl} setSearchResults={setSearchResults} />
            </div>
            <MealsDisplay />
        </div>
    )
}

export default Home
