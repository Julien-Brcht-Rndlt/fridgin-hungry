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
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                </div>
            </div>
            <div>
               <p>Contact us</p>
            </div> 
        </div>
    );
};

export default Footer;