import React from 'react';
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import('./Home'));
const AboutUs = React.lazy(() => import('./AboutUs'));
const Products = React.lazy(() => import('./Products'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Contact = React.lazy(() => import('./Contact'));

const Features = () => {
  return (
    <div className="container">
      <React.Suspense fallback={<span>Loading...</span>}>
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
      </React.Suspense>
    </div>
  )
}
export default Features;
