import React, { Component } from "react";

const Header = (props) => {

  return(
     <header className="header container">
            <h1 className="page-title">EMERALD</h1>
            <aside className="header-list">
                <div className="item topPicks-count">
                    <img src="/svg/TopPicks2.svg" alt="Wishlist Icon"/>
                    <span className="topPicks__item-counter">{props.topPicksTotalItems}</span>
                </div>
            </aside>
        </header>
)
  
};

export default Header;