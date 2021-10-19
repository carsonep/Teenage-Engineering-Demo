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
import Ob4Screen from "./Components/Ob4Screen";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen";
import OpzScreen from "./Components/OpzScreen";
import PocketOperatorScreen from "./Components/PocketOperatorScreen";
import HomePage from "./Components/HomePage";
import OrthoRemotePreview from "./Components/OrthoRemotePreview";
import Od11Screen from "./Components/Od11Screen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/store" exact component={ProductList} />
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
          <Route path="/products/ob-4" exact component={Ob4Screen} />
          <Route path="/products/op-z" exact component={OpzScreen} />
          <Route path="/products/po" exact component={PocketOperatorScreen} />
          <Route path="/products/od-11" exact component={Od11Screen} />
          <Route
            path="/products/orthoremote"
            exact
            component={OrthoRemotePreview}
          />
          <Route path="/designs" exact component={DesignsPreview} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
