import React, { useState, useEffect } from 'react';


const Header = (props) => {
const [sortBy, updateSortBy] = useState(null);

//When there is a change to the sortBy state, we sort the properties by price
useEffect(() => {
    const sort = () => {
        if (sortBy === 'LowToHigh'){
            props.sortLowtoHigh()
        } else if (sortBy === 'HighToLow') {
            props.sortHightoLow()
        }
  }
  sort();
  }, [props, sortBy]);

//Upate state on select option
const handleChange = (e) =>  {
        updateSortBy(e.target.value)
      }

  return(
     <header className="header container">
            <h1 className="page-title tablet-mobile-only">EMERALD</h1>
            <h1 className="page-title mobile-only">E</h1>
            <aside className="header-list">
                <div>
                    <p>Sort by</p>
                </div>
                <select onChange={handleChange}>
                    <option value="">Price</option>
                    <option value="LowToHigh">Lowest-Highest</option>
                    <option value="HighToLow">Highest-Lowest</option>
                </select>
                <div className="item topPicks-count">
                    <img src="/svg/TopPicks2.svg" alt="Wishlist Icon"/>
                    <span className="topPicks__item-counter">{props.topPicksTotalItems}</span>
                </div>
            </aside>
        </header>
)
  
};

export default Header;