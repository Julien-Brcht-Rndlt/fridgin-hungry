import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './FadeSlideshow.css'

const fadeImages = [
  '1sD308-z9WrxA6uGsLQmgSEleix4siAom',
  '152XFfvp-i0oIVG2G-dkhoIJCWJVPwaAp',
  '1AqHh5eC1QOb1xvsNB3YeE5hthSJwHKPH',
  '1QuCen6YfHa9keb4CvxmlSE6uDm1JBC96',
]

const PATH = 'https://drive.google.com/uc?id='


const FadeSlideshow = ({ easing = 'linear', duration = 5000, infinite = true }) => {
  return (
    <div className='slide-container'>
      <Fade arrows={false} Easing={easing}>
        {
          fadeImages.map((fadeImage, index) => {
            return (
              <div key={`each-fade${index}`} className='each-fade'>
                <div key={`image-container${index}`} className='image-container'>
                  <img key={index} src={`${PATH}${fadeImage}`} alt={`slideshow-image#${index}`} />
                </div>
              </div>
            )
          })
        }
      </Fade>
    </div>
  )
}

export default FadeSlideshow