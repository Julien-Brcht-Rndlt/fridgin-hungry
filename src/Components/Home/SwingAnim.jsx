import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

const SwingAnim = ({ x = 0, y = 0, rotation = 0, scale = 1, timing = 150, children }) => {

    const [isActive, setIsActive] = useState(false)

    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isActive ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})` : `translate(0px, 0px) rotate(0deg) scale(1)`,
        config: {
            tension: 300,
            friction: 10,
        },
    })

    useEffect(() => {
        if (!isActive) { return }
        const timeout = window.setTimeout(() => {
            setIsActive(false)
        }, timing)
        return () => {
            window.clearTimeout(timeout)
        }
    }, [isActive, timing])


    const handleMouseEnter = () => {
        setIsActive(true)
    }
    return (
        <animated.div style={style} onMouseOver={handleMouseEnter}>
            {children}
        </animated.div>
    )
}

export default SwingAnim