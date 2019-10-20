import React from 'react';
import TopPickIcon from './Icons/TopPickIcon';
// import Property from './Property'

const ShowProperties = (props) => {
  return(
    <div className="container">
    <ul className="property-list">
      <li className="property-list__item">
          <article className="property" itemtype="http://schema.org/HotelRoom http://schema.org/Product">
            <figure className="property__image-wrapper">
                <img src = "http://via.placeholder.com/300"
                className = "property__image"
                alt = "property" />
                <button className="property__topPicks-button button button--round button--topPicks">
                  <TopPickIcon fill="black"/>
                </button>
            </figure>
            <div className="property__details">
                <h1 className="property__title" itemProp="brand">Title</h1>
                <p className="property__subtitle" itemProp="subtitle">Subtitle</p>
                <p className="property__rooms" itemProp="numberOfRooms">Rooms</p>
                <div className="property__price" itemScope itemType="http://schema.org/Offer">
                  £1000
                </div>
                <button className="book_now">Book Now</button>
            </div>
        </article>
      </li>
      <li className="property-list__item">
          <article className="property" itemtype="http://schema.org/HotelRoom http://schema.org/Product">
            <figure className="property__image-wrapper">
                <img src = "http://via.placeholder.com/300"
                className = "property__image"
                alt = "property" />
                <button className="property__topPicks-button button button--round button--topPicks">
                  <TopPickIcon fill="black"/>
                </button>
            </figure>
            <div className="property__details">
                <h1 className="property__title" itemProp="brand">Title</h1>
                <p className="property__subtitle" itemProp="subtitle">Subtitle</p>
                <p className="property__rooms" itemProp="numberOfRooms">Rooms</p>
                <div className="property__price" itemScope itemType="http://schema.org/Offer">
                  £1000
                </div>
                <button className="book_now">Book Now</button>
            </div>
        </article>
      </li>
      <li className="property-list__item">
          <article className="property" itemtype="http://schema.org/HotelRoom http://schema.org/Product">
            <figure className="property__image-wrapper">
                <img src = "http://via.placeholder.com/300"
                className = "property__image"
                alt = "property" />
                <button className="property__topPicks-button button button--round button--topPicks">
                  <TopPickIcon fill="black"/>
                </button>
            </figure>
            <div className="property__details">
                <h1 className="property__title" itemProp="brand">Title</h1>
                <p className="property__subtitle" itemProp="subtitle">Subtitle</p>
                <p className="property__rooms" itemProp="numberOfRooms">Rooms</p>
                <div className="property__price" itemScope itemType="http://schema.org/Offer">
                  £1000
                </div>
                <button className="book_now">Book Now</button>
            </div>
        </article>
      </li>
    </ul>
  </div>
)};

export default ShowProperties;