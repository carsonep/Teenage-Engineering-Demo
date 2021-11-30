import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

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
import I1Preview from "./Components/I1Preview";
import CartScreen from "./Components/CartScreen";
import CheckoutScreen from "./Components/CheckoutScreen";
import PlayDateScreen from "./Components/PlayDateScreen";
import Computer1Preview from "./Components/Computer1Preview";
import FrekvensScreen from "./Components/FrekvensScreen";
import poModularScreen from "./Components/poModularScreen";
import Op1Screen from "./Components/Op1Screen";
import Op1Accessories from "./Components/Op1Accessories";
import threeDFrekvensPage from "./Components/threeDFrekvensPage";
import ScrollToTop from "./Components/ScrollToTop";
import OrderCompletePage from "./Components/OrderCompletePage";
import HScreen from "./Components/HScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/store" exact component={ProductList} />
          <Route path="/store/cart" component={CartScreen} />
          <Route path="/store/checkout" component={CheckoutScreen} />
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
          <Route
            path="/products/computer-1"
            exact
            component={Computer1Preview}
          />
          <Route path="/products/ob-4" exact component={Ob4Screen} />
          <Route path="/products/op-z" exact component={OpzScreen} />
          <Route path="/products/po" exact component={PocketOperatorScreen} />
          <Route
            path="/products/po/modular"
            exact
            component={poModularScreen}
          />
          <Route path="/products/od-11" exact component={Od11Screen} />
          <Route path="/products/op-1" exact component={Op1Screen} />
          <Route
            path="/products/op-1/accessories"
            exact
            component={Op1Accessories}
          />
          <Route path="/designs/I-1" exact component={I1Preview} />
          <Route path="/designs/playdate" exact component={PlayDateScreen} />
          <Route path="/designs/frekvens" exact component={FrekvensScreen} />
          <Route
            path="/designs/frekvens-hacks"
            exact
            component={threeDFrekvensPage}
          />
          <Route path="/designs/h" exact component={HScreen} />
          <Route
            path="/products/orthoremote"
            exact
            component={OrthoRemotePreview}
          />
          <Route path="/designs" exact component={DesignsPreview} />
          <Route path="/products/:id" component={ProductDetails} />

          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/store/ordercomplete" component={OrderCompletePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
