import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'

const ourProfile = [
    {
    contactName: 'Sophie',
    picture:'https://drive.google.com/drive/u/1/folders/1c9F7YAbQfT5UOvQKpfxQNeQPLVg970ma'
    },
    {contactName: 'Jérôme'},
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
            <h3 className='contactName'>{profile.contactName}</h3>
            <img src={profile.picture} alt={profile.contactName} className='contactPic' />
            <p className='servings'>Links</p>
        </div>)}
        </div>
    </div>
        
    );
}

export default AboutUs