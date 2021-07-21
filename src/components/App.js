import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/App.css';
import Banner from './Banner'
import Home from '../pages/Home'
import Apartment from '../pages/Apartment'
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
          <Route path="/appartement/:id">
            <Apartment />
          </Route>
          <Route path="/apropos">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer>
      </Footer>
      </div>
    </Router>
  );
}

function About() {
  return <h2>A propos</h2>;
}

