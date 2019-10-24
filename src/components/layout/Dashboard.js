import React from 'react';
import ShowProperties from '../property/ShowProperties'

//Dashboard is the central area for properties
const Dashboard = (props) => {
  return(
  <div className ="property-page">
      <ShowProperties 
      properties={props.properties} 
      addToTopPicks={props.addToTopPicks}
      removeFromTopPicks={props.removeFromTopPicks}/>
  </div>
)};

export default Dashboard;