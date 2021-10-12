import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import DisplayProducts from "./Components/DisplayProducts";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import ProductsPreview from "./Components/ProductsPreview";
import WirelessAudioPreview from "./Components/WirelessAudioPreview";
import SynthesizerPreview from "./Components/SynthesizerPreview";
import DesignsPreview from "./Components/DesignsPreview";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products" exact component={ProductsPreview} />
          <Route
            path="/products/audio"
            exact
            component={WirelessAudioPreview}
          />
          <Route
            path="/products/synthesizers"
            exact
            component={SynthesizerPreview}
          />
          <Route path="/designs" exact component={DesignsPreview} />
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
