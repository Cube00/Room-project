import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EachProduct from "./eachProduct";
class ProductsMain extends Component {
  render() {
    return (
      <>
        <section className="main-prdocuts">
          <div className="title-section">
            <h2>Our Products</h2>
            <span>
              If you want to see more products, Click
              <Link to="/products">See more products</Link>
            </span>
          </div>
          <div className="product-items">
            <EachProduct />
          </div>
        </section>
      </>
    );
  }
}

export default ProductsMain;
