import React from 'react'
import './MealsDisplay.css'

const MealsDisplay = () => {

    const mealsImg = ['/meal-1.png', '/meal-2.png', '/meal-3.png']

    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        height: '45rem',
        width: '100%',
    }
    
    const divStyle = {
        height: '40rem',
        width: '40rem',
    }
    
    const imgStyle = {
        maxHeight: '100%',
        maxWidth: '100%',
        padding: '1.5rem',
    }

    return(
        <div style={style}>
            <div style={divStyle}>
                <img style={imgStyle} src={mealsImg[0]} alt={'1st meal sample'} className="img-first-child" />
            </div>
            <div style={divStyle}>
                <img style={imgStyle}  src={mealsImg[1]} alt={'2nd meal sample'} />
            </div>
            <div style={divStyle}>
                <img style={imgStyle} src={mealsImg[2]} alt={'3th meal sample'} />
            </div>
        </div>
    )

}

export default MealsDisplay 