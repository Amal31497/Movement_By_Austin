import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import HomeGym from "./pages/HomeGym/HomeGym.js";
import Pricing from "./pages/Pricing/Pricing.js";
import Contact from "./pages/Contact/Contact.js";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route
            path={[
              '/',
              '/HomeGym'
            ]}
          >
            <Navbar />
          </Route>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/HomeGym' component={HomeGym} />
            <Route exact path='/Pricing' component={Pricing} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
