import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './layout/Dashboard'


class Homepage extends Component {
  state={
  }

  // componentDidMount() {
  //   this.getProducts();
  // }

  // //Get all products from api an add to products array
  // getProducts = () => {
  //   axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=8&offset=0')
  //     .then((res) => { this.setState({products: res.data})})
  //     .then(() =>{this.setProductsPerPage()})
  // };

    render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default Homepage; 