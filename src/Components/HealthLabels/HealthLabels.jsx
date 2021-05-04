import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import './HealthLabels.css'


const HealthLabels = ({ healthLabels }) => {

    const [sliced, setSliced] = useState(true)
    const [column1, setColumn1] = useState([])
    const [column2, setColumn2] = useState([])


    useEffect(() => {
        const length = healthLabels.length

        /* if (healthLabels.length > 5) {
            setSliced(true)
            setColumn1(healthLabels.slice(0,Math.ceil(length / 2)))
            setColumn2(healthLabels.slice(Math.ceil(length / 2), length))
        }*/
    })


    return (

        <>
            <p><FontAwesomeIcon icon="check-double" className='recipe-icon' /> Health Labels:</p>

            {
                !sliced ? (
                    <div>
                        { healthLabels.map((healthLabel, i) => <li key={i}>{healthLabel}</li>)}
                    </div>
                ) : (
                    <>
                        <div>
                            {column1.map((healthLabel, i) => <li key={i}>{healthLabel}</li>)}
                        </div>
                        <div>
                            {column2.map((healthLabel, i) => <li key={i}>{healthLabel}</li>)}
                        </div>
                    </>
                )
            }

        </>

    )

}

export default HealthLabels