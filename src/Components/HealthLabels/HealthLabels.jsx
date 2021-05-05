import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HealthLabels = ({ healthLabels}) => {
console.log('healthLabels: ' + healthLabels)
    const Allergies = [
        'Vegetarian',
        'Vegan',
        'Pork-Free',
        'Gluten-Free',
        'Low-Sugar',
        'Peanut-Free',
    ]

    let allergyFilters = []
    
    useEffect(() => {
        allergyFilters=(healthLabels.filter((healthLabel) => (Allergies.map((allergy) => healthLabel == allergy)))) // OU healthLabel.includes(initialAllergies)
    },[])
    console.log('allergyFilters: ' + allergyFilters)
    return (

        <>
            <p><FontAwesomeIcon icon="check-double" className='recipe-icon' /> Health Labels:</p>

            {
                <>
                {allergyFilters.map((healthLabel, i) => <li key={i}>{healthLabel}</li>)}
                </>
            }

        </>

    )

}

export default HealthLabels