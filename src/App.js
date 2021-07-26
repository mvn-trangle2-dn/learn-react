import './assets/scss/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Account from './pages/Account';
import Auth from './pages/Auth';
import Features from './pages/Features';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './guard/PrivateRoute'

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
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
      </main>
      <Footer />
    </>
  );
}

export default App;
