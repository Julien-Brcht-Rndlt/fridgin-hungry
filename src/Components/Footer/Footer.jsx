import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
           <p>Terms and Conditions</p>
            <div>
                { /* <FontAwesomeIcon icon="coffee" /> */ }
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
            </div>
           <div>Contact us</div> 
        </div>
    );
};

export default Footer;