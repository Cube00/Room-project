import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Product />
        </Route>
      </Router>
    </>
  );
}

export default App;
