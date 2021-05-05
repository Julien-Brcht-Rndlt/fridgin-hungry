import React, { useState, useEffect } from 'react'
import './IngredientFilter.css'

const IngredientFilter = ({ searchUrl, setSearchUrl }) => {
    const [ingredients, setIngredients] = useState({
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
    })
    useEffect(() => {
        setSearchUrl(makeUrlPart(searchUrl))

    }, [ingredients])

    const [inputs, setInputs] = useState([
        'ingredient1', //input1
        'ingredient2', //input2
        'ingredient3', //input3
        'ingredient4', //input4
    ])

    // function to dynamically update/refresh url
    const makeUrlPart = (url) => {

        const startIndex = url.indexOf('q=')
        let endOfIngredients = url.substr(startIndex, url.length).indexOf('&')
        endOfIngredients = endOfIngredients > -1 ? endOfIngredients : url.length
        const urlPart = url.substr(startIndex, endOfIngredients)

        url = url.replace(urlPart, `q=${Object.values(ingredients).filter((ingredient) => ingredient.trim().length > 0).join(', ')}`)

        return url
    }

    const handleIngredientsChange = (event) => {
        setIngredients((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }

    return (
        <div className='ingredients'>
            {inputs.map((input, index) => {
                return (
                    <div className='ingr-inputs'>
                        <input
                            key={index}
                            name={input}
                            type='text'
                            value={ingredients[input]}
                            onChange={handleIngredientsChange}
                            placeholder={`ingredient ${index + 1} `}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default IngredientFilter
