import React from "react";

const Header = (props) => {

  return(
     <header className="header container">
            <h1 className="page-title">EMERALD</h1>
            <aside className="header-list">
                <div>
                    <p>Sort by</p>
                </div>
                <button onClick={props.sortLowtoHigh}>Lowest-Highest</button>
                <button onClick={props.sortHightoLow}>Highest-Lowest</button>
                <div className="item topPicks-count">
                    <img src="/svg/TopPicks2.svg" alt="Wishlist Icon"/>
                    <span className="topPicks__item-counter">{props.topPicksTotalItems}</span>
                </div>
            </aside>
        </header>
)
  
};

export default Header;