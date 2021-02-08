import React, { Component } from "react";
import data from "./data";

const contextApi = React.createContext();

class Context extends Component {
  state = {
    ourProduct: [],
  };

  componentDidMount() {
    const fetchingData = data.map((item) => {
      const images = item.fields.images.map((item) => item.fields.file.url);
      const name = item.fields.name;
      const id = item.sys.id;
      const whole = item.fields;
      var array = { images, name, id, whole };
      return array;
    });
    this.setState({
      ourProduct: fetchingData,
    });
  }
  render() {
    return (
      <contextApi.Provider value={[...this.state.ourProduct]}>
        {this.props.children}
      </contextApi.Provider>
    );
  }
}

const contextConsumer = contextApi.Consumer;

export { Context, contextApi, contextConsumer };
