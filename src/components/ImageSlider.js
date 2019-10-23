import React from 'react';
import { Slide } from 'react-slideshow-image';
 
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
          </div>
          <div className="each-slide">
          <img src={property.images[1].image_cache} alt="slide 2"/>
          </div>
          <div className="each-slide">
          <img src={property.images[2].image_cache} alt="slide 3"/>
          </div>
          <div className="each-slide">
          <img src={property.images[3].image_cache} alt="slide 4"/>
          </div>
        </Slide>
      </div>
    )
}


export default ImageSlider