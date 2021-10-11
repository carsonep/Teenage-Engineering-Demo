import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import DisplayProducts from "./Components/DisplayProducts";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import ProductsPreview from "./Components/ProductsPreview";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products" exact component={ProductsPreview} />
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
