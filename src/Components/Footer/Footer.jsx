import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <div>
               <p>Terms and Conditions</p>
            </div>
            <div className="social-medias">
                <div>
                    <a href="https://www.facebook.com/Fridgin-Hungry-106454081572173" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-square']} className="social-icon" /></a>
                </div>
                <div>
                    <a href="https://twitter.com/FridginH" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter-square']} className="social-icon" /></a>
                </div>
            </div>
            <div>
               <p>Contact us</p>
            </div> 
        </div>
    );
};

export default Footer;