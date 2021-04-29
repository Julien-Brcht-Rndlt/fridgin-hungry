import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './NavPlateButton.css'

const NavPlateButton = ({ title, sentences, target }) => {

    return (
        <HashLink to={`#${target}`} scroll={(element) => element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })}>
            <div className="nav-plate-button flex-container">
                <h2>{title}</h2>
                <div className="flex-container">
                    {sentences.map((sentence) => <p>{sentence}</p>)}
                </div>
            </div>
        </HashLink>
    )
}

export default NavPlateButton