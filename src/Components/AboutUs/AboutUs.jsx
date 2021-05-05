import React, { useEffect } from 'react'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HashNavButton from '../NavButtons/HashNavButton'
import { useAnimatePresence } from 'use-animate-presence'

const ourProfile = [
    {
        contactName: 'Sophie',
        quote: 'Life is meaningless without pizza',
        picture: 'https://drive.google.com/uc?id=1L27qBZlFQqKeWTX_kz3V_nqyF57Zz4ZB',
        gitHub: 'https://github.com/SophieTopart',
        linkedin: 'https://www.linkedin.com/in/sophie-bailly-topart-59a0b893/',
        mail: 'sophiebailly9@gmail.com'
    },
    {
        contactName: 'Jérôme',
        quote: 'In raclette we trust',
        picture: 'https://drive.google.com/uc?id=1UJd4Ww-f05LCLEGbMN09W5tR61lQ65lL',
        gitHub: 'https://github.com/JeromeShaaban',
        linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-shaaban/',
        mail: 'jerome.shaaban@gmail.com'
    },
    {
        contactName: 'Sarah',
        quote: 'Chocolate every day',
        quotebis: 'keeps the doctor away',
        picture: 'https://drive.google.com/uc?id=1Nlm5ClZ1X61XTvhNNF81CiV3AZJplQEJ',
        gitHub: 'https://github.com/Sarahbsn',
        linkedin: 'https://www.linkedin.com/in/sarah-bensouna-b25779152/',
        mail: 'sarah.bensouna@hotmail.com'
    },
    {
        contactName: 'Julien',
        quote: 'Tea is the new coffee',
        picture: 'https://drive.google.com/uc?id=1CilJ4lN_4Fvemuixj9g5OWBrf6ooakQB',
        gitHub: 'https://github.com/Julien-Brcht-Rndlt',
        linkedin: 'https://www.linkedin.com/in/julien-nicolas-brachet-randoulet-229aa2136/',
        mail: 'jn.brachet.randlt@gmail.com'
    }
]

const diff = window.innerWidth / 2 + 300

const variants = {
    y: { from: -diff, to: 0 },
    deg: 20
}

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const square = useAnimatePresence({
        variants: variants,
        initial: 'visible',
    })

    return (
        <div>
            <h3 className='title'>How did we come about the idea for Fridgin' Hungry? </h3>
            <div className='aboutProject'>
                <p>"Well, first of all, we love food.<br /> But as wilders, we have very little free time on our hands<br /> and our fridge is often half empty. <br />
            This is why we wanted to create an app which would allow us <br />to find recipes to use up the few ingredients left at our disposal."
        </p>
            </div>
            <div className='contactDisplay' ref={square.ref}>
                {ourProfile.map((profile) =>
                    <div className='contactCard'>
                        <img src={profile.picture} alt={profile.contactName} className='contactPic' />
                        <h3 className='contactName'>{profile.contactName}</h3>
                        <p>{profile.quote}</p>
                        <p>{profile.quotebis}</p>
                        <div className='socialIcons'>
                            <a href={profile.gitHub} target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} className='socialIcon' /></a>
                            <a href={profile.linkedin} target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} className='socialIcon' /></a>
                            <a href={`mailto:${profile.mail}`} target='_blank'><FontAwesomeIcon icon={['fas', 'envelope-square']} className='socialIcon' /></a>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <HashNavButton title={'Back to emptying your fridge'} to={'/home#filters'} />
            </div>
        </div>

    )
}

export default AboutUs