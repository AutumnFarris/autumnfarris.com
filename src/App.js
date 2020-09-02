import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/resume/Resume';
import Instagram from './components/instagram/Instagram';
import Error from './components/Error';
import Navigation from './components/Navigation';
// import './App.css';

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
        </div>
      </BrowserRouter>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//     <div className="App">
//       <h1>Hi, I'm Autumn</h1>
//     </div>
//     );
//   }
// }

export default App;
