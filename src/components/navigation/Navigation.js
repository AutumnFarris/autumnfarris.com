import React from 'react';
import './Navigation.scss';

import { NavLink } from 'react-router-dom';
import { Link } from "react-router-relative-link";

const Navigation = () => {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        </button>
          <div class="navbar">
          <div class="collapse navbar-collapse">
            <div class="navbar-nav mt-2 mt-lg-0">
              <a class="nav-item nav-link" href="/">Home</a>
              <a class="nav-item nav-link" href="/travel">Travel Blog</a>
              <a class="nav-item nav-link" href="/resume">Resume</a>
              <a class="nav-item nav-link" href="/instagram">Instagram</a>
            </div>
            </div>
          </div>
         </nav>

    );
}

export default Navigation;
