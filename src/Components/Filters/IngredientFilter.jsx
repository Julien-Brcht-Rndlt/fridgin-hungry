import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './IngredientFilter.css'

export const IngredientFilter = () => {
    const [ingredients, setIngredients] = useState({
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
    })
    const [searchResults, setSearchResults] = useState('')

    const handleClick = () => {
        let searchUrl = `https://api.edamam.com/search?app_id=f604900f&app_key=b523b505a718166bca1753372a51616f&q=${Object.values(
            ingredients
        ).join(', ')}`
        console.log(searchUrl)

        axios
            .get(searchUrl)
            .then((response) => response.data)
            .then((data) => {
                setSearchResults(data.hits)
            })
    }

    const [inputs, setInputs] = useState([
        'ingredient1', //input1
        'ingredient2', //input2
        'ingredient3', //input3
        'ingredient4', //input4
    ])

    const handleIngredientsChange = (event) =>
        setIngredients((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })

    return (
        <div className="ingredients">
            <h3>Ingredients</h3>
            {inputs.map((input, index) => {
                return (
                    <div className="input">
                        <input
                            id=""
                            key={index}
                            name={input}
                            type="text"
                            value={ingredients[input]}
                            onChange={handleIngredientsChange}
                        />
                    </div>
                )
            })}
            <button onClick={handleClick}>Search</button>
        </div>
    )
}
