import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './Products';
import Contact from './Contact';
import { Switch, Route } from "react-router-dom";
import ProductDetail from './ProductDetail';

const Features = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  )
}
export default Features;
