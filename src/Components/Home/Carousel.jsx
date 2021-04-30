import React from 'react'
import './Carousel.css'

const Carousel = ({ duration, delay, isInfinite }) => {

    const style = {
        background: 'url("./veggies.jpg") no-repeat no-repeat',
        backgroundSize: 'cover',
        height: '45rem',
        width: '100%',
        animation: 'swapDiapo',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: isInfinite && 'infinite'
    }

    return (
        <div className="top-container" style={style} />
    )

}

export default Carousel