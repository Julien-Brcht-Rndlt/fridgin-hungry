import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ourProfile = [
    {
    contactName: 'Sophie',
    picture:'https://drive.google.com/file/d/1gWtm8pxadwFJsCJF8CMMH9tK-to79c-wiew?usp=sharing',
    gitHub: 'https://github.com/SophieTopart',
    linkedin: 'https://www.linkedin.com/in/sophie-bailly-topart-59a0b893/'
    },
    {contactName: 'Jérôme',
    picture:'../meal-1.png'},
    {contactName: 'Sarah'},
    {contactName: 'Julien'}
]
const path = 'https://drive.google.com/uc?id=';

const AboutUs = () => {
    return(
    <div>
        <div>
            <Link to='/'><button className='nav-button'>Back</button></Link>
        </div>
        <div className='aboutProject'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, magnam temporibus! Dolor aut deleniti consectetur dolore beatae! Quae, aperiam mollitia quos, tempore aliquam autem, repudiandae suscipit repellat blanditiis deserunt delectus?</p>
        </div>
        <div className='contactDisplay'>
        {ourProfile.map((profile) => 
        <div className='contactCard'>
            <img src={profile.picture} alt={profile.contactName} className='contactPic' />
            <h3 className='contactName'>{profile.contactName}</h3>
            <p className='servings'>Links</p>
            <div className='socialIcons'>
                <a href={profile.gitHub} target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} className='social-icon' /></a>
                <a href={profile.linkedin} target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} className='social-icon' /></a>
            </div>
        </div>
        )}
        </div>
    </div>
        
    );
}

export default AboutUs