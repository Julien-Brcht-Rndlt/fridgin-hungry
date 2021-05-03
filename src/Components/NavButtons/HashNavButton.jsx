import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './HashNavButton.css'

const HashNavButton = ({ title, to }) => {

    return(
        <div className="hash-nav">
            <HashLink to={to} scroll={(element) => element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })}>
                <button>{title}</button>
            </HashLink>
        </div>
    )

}

export default HashNavButton