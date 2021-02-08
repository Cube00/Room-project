import React, { Component } from "react";
import { contextApi } from "../context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EachProduct extends Component {
  static contextType = contextApi;
  render() {
    const data = this.context;
    return (
      <>
        {data.map((item) => {
          return item.whole.featured === true ? (
            <div className="main-product-item" key={item.id}>
              <div className="image-controler">
                <img src={item.images[0]} alt="" />
              </div>
              <h2>{item.name}</h2>
              <span>${item.whole.price}</span>
              <Link to={item.whole.slug}>View</Link>
            </div>
          ) : (
            ""
          );
        })}
      </>
    );
  }
}

export default EachProduct;
