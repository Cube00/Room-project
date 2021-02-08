import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchIcon from "../img/loupe.svg";
import Basket from "../img/basket.svg";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="logo">
            <h1>
              <span> MODERN </span> <span> FURNITURE</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/"> Bedroom </Link>
              </li>
              <li>
                <Link to="/"> Lounge </Link>
              </li>
              <li>
                <Link to="/"> Kitchen </Link>
              </li>
              <li>
                <Link to="/"> Lighting </Link>
              </li>
            </ul>
          </nav>
          <div className="srch-ic bskt-ic">
            <img className="search-btn" src={SearchIcon} alt="search" />
            <img className="basket-btn" src={Basket} alt="Basket" />
          </div>
        </header>
      </>
    );
  }
}
export default Header;
