import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/About';
import Resume from './components/resume/Resume';
import Instagram from './components/instagram/Instagram';
import Error from './components/Error';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/resume" component={Resume}/>
             <Route path="/instagram" component={Instagram}/>
            <Route component={Error}/>
           </Switch>
           <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
