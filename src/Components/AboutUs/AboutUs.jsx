import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'

const ourProfile = [
    {name: Sophie}
]

const AboutUs = () => {
    return(
    <div>
        <div>
            <Link to='/'><button className='nav-button'>Back</button></Link>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio architecto illo rem cupiditate illum facere veniam vitae facilis! Quis nihil suscipit consequatur in aliquid, asperiores ea blanditiis dolorum perferendis? </p>
        </div>
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