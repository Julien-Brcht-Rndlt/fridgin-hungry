import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HealthLabels = ({ healthLabels }) => {

    const Allergies = [
        'Vegetarian',
        'Vegan',
        'Pork-Free',
        'Gluten-Free',
        'No-Sugar',
        'Peanut-Free',
    ]

    const [allergyFilters, setAllergyFilters] = useState([])

    useEffect(() => {
        const selectedLabels = healthLabels[0].filter(healthLabel => Allergies.includes(healthLabel))
        setAllergyFilters(selectedLabels)
    }, [healthLabels])

    return (
        <div>
            <p>
                <FontAwesomeIcon icon='check-double' className='recipe-icon' /> Health Labels: {allergyFilters.map((allergyFilter, index) => <li key={index}>{allergyFilter}</li>)}
            </p>
        </div>
    )
}

export default HealthLabels