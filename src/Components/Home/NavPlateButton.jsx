import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './NavPlateButton.css'

const NavPlateButton = ({ title, sentences, target }) => {


    const style = {
        width: '32rem',
        height: '29rem',
        padding: '10rem',
        justifyContent: 'space-between',
        color: 'rgb(55, 55, 55)'
    }
    
    const titleStyle = {
        fontSize: '3.7rem',
        marginBottom: '4rem',
        textAlign: 'right',
        width: '35rem',
    }
    
    const descStyle =  {
        fontWeight: 'bold',
        fontSize: '2.3rem',
        color: 'rgb(55, 55, 55)',
        padding: '0.5rem',
    }

    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <HashLink to={`#${target}`} scroll={(element) => element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})}>
            <div className="nav-plate-button" style={{ ...style, ...flexContainer}}>
                <h2 style={titleStyle}>{ title }</h2>
                <div style={flexContainer}>
                { sentences.map((sentence) => <p style={descStyle}>{sentence}</p>) }
                </div> 
            </div>
        </HashLink>
    )
}

export default NavPlateButton