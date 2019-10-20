import React from 'react';
import Property from './Property';

const ShowProperties = (props) => {
  return(
    <div className="container">
      <ul className="property-list">
        {
        props.properties ?
          props.properties.map((property, index) => {
          return <li key={index} className="property-list__item"> 
            <Property property={property}/>
        </li>
      })
      : <li>No results</li> 
      }
      </ul>
  </div>
)};

export default ShowProperties;