import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Travel from './components/travel/Travel';
import Resume from './components/resume/Resume';
import Instagram from './components/instagram/Instagram';
import NewZealand from './components/travel/NewZealand/NewZealand';
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
             <Route path="/travel" component={Travel}/>
             <Route path="/resume" component={Resume}/>
             <Route path="/instagram" component={Instagram}/>
             <Route path="/travel/NewZealand/NewZealand" component={NewZealand} />
            <Route component={Error}/>
           </Switch>
           <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
