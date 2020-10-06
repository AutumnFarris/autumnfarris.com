import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Travel from './components/travel/Travel';
import Resume from './components/resume/Resume';
import Instagram from './components/instagram/Instagram';
import Error from './components/Error';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navigation />

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/resume" component={Resume}/>
            <Route path="/instagram" component={Instagram}/>
            <Route path="/Travel">
              <Travel />
            </Route>
            <Route component={Error}/>
          </Switch>
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
