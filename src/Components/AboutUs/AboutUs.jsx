import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HashNavButton from '../NavButtons/HashNavButton'

const ourProfile = [
    {
    contactName: 'Sophie',
    picture:'https://drive.google.com/uc?id=1L27qBZlFQqKeWTX_kz3V_nqyF57Zz4ZB',
    gitHub: 'https://github.com/SophieTopart',
    linkedin: 'https://www.linkedin.com/in/sophie-bailly-topart-59a0b893/',
    mail: 'sophiebailly9@gmail.com'
    },
    {
    contactName: 'Jérôme',
    picture:'https://drive.google.com/uc?id=1RdBTeZ6_hFRxIhs7Yky-mjL1cue9U8Sl',
    gitHub: 'https://github.com/JeromeShaaban',
    linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-shaaban/',
    mail: ''
    },
    {
    contactName: 'Sarah',
    picture:'https://drive.google.com/uc?id=1Nlm5ClZ1X61XTvhNNF81CiV3AZJplQEJ',
    gitHub: 'https://github.com/Sarahbsn',
    linkedin: 'https://www.linkedin.com/in/sarah-bensouna-b25779152/',
    mail: ''
    },
    {
    contactName: 'Julien',
    picture: 'https://drive.google.com/uc?id=1CilJ4lN_4Fvemuixj9g5OWBrf6ooakQB',
    gitHub: 'https://github.com/Julien-Brcht-Rndlt',
    linkedin: 'https://www.linkedin.com/in/julien-nicolas-brachet-randoulet-229aa2136/',
    mail: ''
    }

]
const path = 'https://drive.google.com/uc?id=';

const AboutUs = () => {
    return(
    <div>
        <div className='aboutProject'>
        <p>How did we can about the idea for Fridin' Hungry? Well, first of all, we love food.<br/> But as wilders, we have very little free time on our hands and our fridge is often half empty. <br/>
            This is why we wanted to create an app which would allow us <br/>to find recipes to use up the few ingredients left at our disposal.
        </p>
        </div>
        <div className='contactDisplay'>
        {ourProfile.map((profile) => 
        <div className='contactCard'>
            <img src={profile.picture} alt={profile.contactName} className='contactPic' />
            <h3 className='contactName'>{profile.contactName}</h3>
            <div className='socialIcons'>
                <a href={profile.gitHub} target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} className='socialIcon' /></a>
                <a href={profile.linkedin} target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} className='socialIcon' /></a>
                <a href={`mailto:${profile.mail}`} target='_blank'><FontAwesomeIcon icon={['fas', 'envelope-square']} className='socialIcon' /></a>
            </div>
        </div>
        )}
        </div>
        <div>
            <HashNavButton title={'Back to emptying your fridge'} to={'/home#filters'}/>
        </div>
    </div>
        
    );
}

export default AboutUs