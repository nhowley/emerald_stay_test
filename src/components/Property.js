import React from 'react'
import TopPickIcon from './Icons/TopPickIcon';

const Property = ({property}) => {

return(
    <article className="property" itemtype="http://schema.org/HotelRoom http://schema.org/Product">
        <figure className="image-wrapper">
            <img src = {property.open_graph_image}
            className = "image"
            alt = "property" />
            <button className="topPicks-button button button--round button--topPicks">
              <TopPickIcon fill="black"/>
            </button>
        </figure>
        <div className="details">
            <h1 className="title" itemProp="brand">{property.title}</h1>
            <p className="subtitle" itemProp="subtitle">{property.city}</p>
            <p className="rooms" itemProp="numberOfRooms">{property.beds_adults} adult beds, {property.number_of_bedrooms} bedrooms</p>
            <div className="price" itemScope itemType="http://schema.org/Offer">
              from &euro;{property.property_price}/night
            </div>
            <button className="book_now">Book Now</button>
        </div>
    </article>
  )
}

export default Property