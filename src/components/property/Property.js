import React, { useState } from 'react';
import TopPickIcon from '../Icons/TopPickIcon';
import ImageSlider from '../ImageSlider'


const Property = ({property, addToTopPicks, removeFromTopPicks}) => {
const [topPicksFill, setTopPicksFill] = useState('#d9d9d9');
const [addedToTopPicks, updateTopPicks] = useState(false);

//Add or remove item from topPicks
const toggleTopPicks = () => {
  addedToTopPicks === false ? addToTopPicks() : removeFromTopPicks();
  addedToTopPicks === true ? setTopPicksFill("#d9d9d9") : setTopPicksFill("black");
}
return(
    <article className="property" itemType="http://schema.org/HotelRoom http://schema.org/Product">
        <figure className="image-wrapper">
            <ImageSlider property={property}/>
            <button className="topPicks-button button button--round button--topPicks" onClick={(topPicksIcon) => {
                toggleTopPicks(topPicksIcon); 
                updateTopPicks(!addedToTopPicks);
            }}>
              <TopPickIcon fill={topPicksFill}/>
            </button>
        </figure>
        <div className="details">
          <h1 className="title" itemProp="brand">{property.title}</h1>
          <p className="subtitle" itemProp="subtitle">{property.city}</p>
          <div className="rooms_book">
            <div>
              <p className="rooms" itemProp="numberOfRooms">{property.beds_adults > 0 ? `${property.beds_adults} beds, ` : ""} {property.number_of_bedrooms} bedrooms</p>
              <div className="price" itemScope itemType="http://schema.org/Offer">
                from <span>&euro;{property.property_price}</span>/night
              </div>
            </div>
            <button className="button button--primary">Book Now</button>
          </div>
        </div>
    </article>
  )
}

export default Property