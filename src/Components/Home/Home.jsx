import React from 'react'
import './Home.css'
import { IngredientFilter } from '../Filters/IngredientFilter'

const Home = () => {
    return (
        <div className="home">
            <div className="whitesmoke-bg">
                <div className="description-text">
                    <p>Great recipe ideas</p>
                    <p>Zero Waste</p>
                    <p>100% Tasty</p>
                </div>
                <div className="emptyFridge">
                    <h2>Empty your fridge!</h2>
                </div>
            </div>

            <div className="beige-bg">
                <IngredientFilter />
            </div>
        </div>
    )
}

export default Home
