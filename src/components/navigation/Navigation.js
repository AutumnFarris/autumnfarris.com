import React from 'react';
import './Navigation.scss';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/instagram">Instagram</NavLink>
            </div>
        </div>
       </div>
    );
}

export default Navigation;
