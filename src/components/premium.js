import React, { Component } from "react";
import data from "../data";

class Premium extends Component {
  render() {
    const premiumItem = data;
    const { name, description } = premiumItem[0].fields;
    const id = premiumItem[0].sys.id;
    const image = premiumItem[0].fields.images[0].fields.file.url;

    return (
      <>
        <div className="premium-item" key={id}>
          <h2>{name}</h2>
          <span>{description}</span>
          <img src={image} alt="image" />
          <div className="shadow"></div>
        </div>
      </>
    );
  }
}

export default Premium;
