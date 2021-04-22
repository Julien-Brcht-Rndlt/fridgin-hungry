import React, { useState } from 'react'
import './IngredientFilter.css'

const IngredientFilter = ({ url1, setUrl1, searchUrl, setSearchUrl }) => {
    const [ingredients, setIngredients] = useState({
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
    })

    const [inputs, setInputs] = useState([
        'ingredient1', //input1
        'ingredient2', //input2
        'ingredient3', //input3
        'ingredient4', //input4
    ])

    const handleIngredientsChange = (event) => {
        setIngredients((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }

        })
        //construction de l'url en fonction des valeurs inputs
       
        setUrl1(`&q=${Object.values(ingredients).join(', ')}`)

        //`&q=${Object.values(ingredients).join(', ')}`
        // setSearchUrl
    }

    return (
        <div className="ingredients">
            <h3>Ingredients</h3>
            {inputs.map((input, index) => {
                return (
                    <div className="ingr-inputs">
                        <input
                            key={index}
                            name={input}
                            type="text"
                            value={ingredients[input]}
                            onChange={handleIngredientsChange}
                            placeholder={`ingredient ${index + 1}`}
                            // {searchResults ? <RecipeResults /> : null}
                        />
                    </div>
                )
            })}
            
        </div>
    )
 
}

export default IngredientFilter
