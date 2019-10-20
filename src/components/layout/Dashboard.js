import React from 'react';
import ShowProperties from '../ShowProperties'

//Dashboard is the central area for products - we need two components- products and pagination
const Dashboard = (props) => {
  return(
  <div className ="property-page">
      <ShowProperties />
  </div>
)};

export default Dashboard;