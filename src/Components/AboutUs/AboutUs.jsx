import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'

const ourPics = []

const AboutUs = () => {
    return(
        <div>
            <Link to='/'><button className='nav-button'>Back</button></Link>
           
        <div className='contact-card'>
            <h3 className='name'></h3>
            <img src='' alt='' className='recipeImage' />
            <p className='servings'> Servings:</p>
            <p className='totalTime'> Total time: min</p>
        </div>
    
        </div>
    );
}

export default AboutUs