import React from 'react'
import './MealsDisplay.css'

const MealsDisplay = () => {

    const mealsImg = ['/meal-1.png', '/meal-2.png', '/meal-3.png']

    return (
        <div className='meals-display'>
            <div>
                <img src={mealsImg[0]} alt={'1st meal sample'} className="img-first-child" />
            </div>
            <div>
                <img src={mealsImg[1]} alt={'2nd meal sample'} />
            </div>
            <div>
                <img src={mealsImg[2]} alt={'3th meal sample'} />
            </div>
        </div>
    )

}

export default MealsDisplay