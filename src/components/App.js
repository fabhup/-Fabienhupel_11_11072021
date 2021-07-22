import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/App.css';
import Banner from './Banner'
import Home from '../pages/Home'
import Apartment from '../pages/Apartment'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import Footer from './Footer'

export default function App() {
  return (
    <Router>
      <div>
      <Banner>
			</Banner>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/appartement/:id/:text">
            <Apartment />
          </Route>
          <Route exact path="/a-propos">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      <Footer>
      </Footer>
      </div>
    </Router>
  );
}

