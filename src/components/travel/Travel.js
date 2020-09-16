import React from 'react';
import Iframe from 'react-iframe';
import NZ from './photos/NZ.jpg';
import Australia from './photos/Australia.jpeg';
import Gettysburg from './photos/Gettysburg.jpeg';
import './Travel.scss';

const Travel = () => {
    return (

          <div>
            <div class="img__wrap">
                <img src={NZ} alt="New Zealand" />
                  <div class="container">
                    <p class="img__description">New Zealand</p>
                  </div>
            </div>
            <div class="img__wrap">
                <img src={Australia} alt="Australia" />
                  <div class="container">
                    <p class="img__description">Australia</p>
                  </div>
            </div>
            <div class="img__wrap">
                <img src={Gettysburg} alt="Gettysburg" />
                  <div class="container">
                    <p class="img__description">Gettysburg</p>
                  </div>
              </div>
              </div>
    );
}

export default Travel;
