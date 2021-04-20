import React, { useState } from 'react'

import { HashLink } from 'react-router-hash-link'

import './Home.css'
import IngredientFilter from '../Filters/IngredientFilter'
import RecipeResults from '../RecipeCards/RecipeCards'

const Home = () => {
    const [searchResults, setSearchResults] = useState([])

    return (
        <div className="home">
            <div className="whitesmoke-bg">
                <div className="description-text">
                    <p>Great recipe ideas</p>
                    <p>Zero Waste</p>
                    <p>100% Tasty</p>
                </div>
            </div>
            <div>
                <HashLink to="#filters" scroll={(element) => element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>
                    <div className="emptyFridge">
                        <h2>Empty your fridge!</h2>
                    </div>
                </HashLink>
            </div>

            <div id='filters' className="beige-bg">
                <IngredientFilter setSearchResults={setSearchResults} />
                <RecipeResults searchResults={searchResults} />
            </div>
        </div>
    )
}

export default Home
