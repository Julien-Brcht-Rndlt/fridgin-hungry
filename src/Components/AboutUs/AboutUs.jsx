import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'

const ourPics = []

const AboutUs = () => {
    return(
        <div>
            <Link to='/'><button className='nav-button'>Back</button></Link>
           
        <div className='contactCard'>
            <h3 className='contactName'></h3>
            <img src='' alt='' className='contactPic' />
            <p className='servings'> Servings:</p>
            <p className='totalTime'> Total time: min</p>
        </div>
    
        </div>
    );
}

export default AboutUs