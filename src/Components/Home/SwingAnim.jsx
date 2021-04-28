import React, { useState, useEffect } from 'react'

const SwingAnim = ({ rotation = 0, timing = 150, childComponent }) => {

    const [isActive, setIsActive] = useState(false)

    const style = {
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isActive ? `rotate(${rotation}deg)` : `rotate(0deg)`,
        transition: `transform ${timing}ms`,
    }

    useEffect(() => {

        if(!isActive) { return }

        const timeout = window.setTimeout(() => {
            setIsActive(false)
        }, timing)

        return () => {
            window.clearTimeout(timeout)
        }

    }, [isActive, timing])


    const handleMouseOver = () => {
        setIsActive(true)
    }


    return (
        <div style={style} onMouseOver={handleMouseOver}>
            {childComponent}
        </div>
    )

}

export default SwingAnim