import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './layout/Dashboard'


class Homepage extends Component {
  state = {
    properties: []
  }

  componentDidMount() {
    this.getSearchResults();
  }

  //Get all products from api an add to products array
  getSearchResults = () => {
    axios.get('https://api.emerald-stay.fr/api/properties?country=1&adults=1&children=0&page=1')
      .then((res) => { this.setState({properties: res.data.data.properties})})
  };

  getProperties = () =>{
    console.log(this.state.properties)
  }

    render() {
    return (
      <div>
        <Dashboard properties={this.state.properties}/>
        <button onClick={this.getProperties}>Get properties</button>
      </div>
    );
  }
}

export default Homepage; 