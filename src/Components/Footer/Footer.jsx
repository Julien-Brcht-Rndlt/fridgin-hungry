import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='terms'>
                <p>Fridgin' Hungry! © 2021</p>
            </div>
            <div className='social-medias'>
                <div>
                    <a href='https://www.facebook.com/Fridgin-Hungry-106454081572173' target='_blank'><FontAwesomeIcon icon={['fab', 'facebook-square']} className='social-icon' /></a>
                </div>
                <div>
                    <a href='https://twitter.com/FridginH' target='_blank'><FontAwesomeIcon icon={['fab', 'twitter-square']} className='social-icon' /></a>
                </div>
                <div>
                    <a href='https://www.instagram.com/fridginhungry/' target='_blank'><FontAwesomeIcon icon={['fab', 'instagram-square']} className='social-icon' /></a>
                </div>
                <div>
                    <a href='https://github.com/Julien-Brcht-Rndlt/fridgin-hungry' target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} className='social-icon' /></a>
                </div>
            </div>
            <div className='contact'>
                <p><Link to='/aboutUs' style={{ textDecoration: 'none' }}>About us</Link></p>
            </div> 
        </div>
    )
}

export default Footer