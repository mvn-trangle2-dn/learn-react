import './assets/scss/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './guard/PrivateRoute'

const Account = React.lazy(() => import('./pages/Account'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Features = React.lazy(() => import('./pages/Features'));

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <React.Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </React.Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
