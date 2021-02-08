import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import Navbar from './Components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/works">
          <Works />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
