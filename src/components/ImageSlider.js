import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay:false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const ImageSlider = ({property}) => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img src={property.images[0].image_cache} alt="slide 1"/>
            {/* <div style={{'backgroundImage': `url(${property.images[0].image_cache})`}}>
              <span>Slide 1</span>
            </div> */}
          </div>
          <div className="each-slide">
          <img src={property.images[1].image_cache} alt="slide 1"/>
            {/* <div style={{'backgroundImage': `url(${property.images[1].image_cache})`}}>
              <span>Slide 2</span>
            </div> */}
          </div>
          <div className="each-slide">
          <img src={property.images[2].image_cache} alt="slide 1"/>
            {/* <div style={{'backgroundImage': `url(${property.images[2].image_cache})`}}>
              <span>Slide 3</span>
            </div> */}
          </div>
          <div className="each-slide">
          <img src={property.images[3].image_cache} alt="slide 1"/>
            {/* <div style={{'backgroundImage': `url(${property.images[2].image_cache})`}}>
              <span>Slide 3</span>
            </div> */}
          </div>
        </Slide>
      </div>
    )
}


export default ImageSlider