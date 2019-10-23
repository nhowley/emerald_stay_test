import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './layout/Dashboard'
import Header from './layout/Header';


class Homepage extends Component {
  state = {
    properties: [],
    topPicksTotalItems: 0
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

  //add product to topPicks when you click on topPicks Icon
  addToTopPicks = (topPicksIcon) => {
    console.log('added to topPicks')
    const newTotalItems = this.state.topPicksTotalItems + 1
    this.setState({
      topPicksTotalItems: newTotalItems
    })
    console.log(newTotalItems)
  }

  //remove item from topPicks when you click on it again
  removeFromTopPicks = () => {
    console.log('removed from topPicks')
    const newTotalItems = this.state.topPicksTotalItems - 1
    this.setState({
      topPicksTotalItems: newTotalItems
    })
    console.log(newTotalItems)
  }

    render() {
    return (
      <div>
        <Header topPicksTotalItems={this.state.topPicksTotalItems}/>
        <Dashboard 
        properties={this.state.properties}
        addToTopPicks={this.addToTopPicks}
        removeFromTopPicks={this.removeFromTopPicks}/>
        <button onClick={this.getProperties}>Get properties</button>
      </div>
    );
  }
}

export default Homepage; 