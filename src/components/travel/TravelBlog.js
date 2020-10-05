import React from 'react';
import NZ from './photos/NZ.jpg';
import OperaHouse from './photos/OperaHouse.JPG';
import Gettysburg from './photos/Gettysburg.jpeg';
import Austria from './photos/Austria.JPG';
import London from './photos/London.JPG';
import Germany from './photos/Germany.jpeg';
import Paris from './photos/Paris.jpeg';
import Belgium from './photos/Belgium.jpeg';
import Rome from './photos/Rome.JPG';
import './Travel.scss';
import { Link, useRouteMatch } from "react-router-dom";

const TravelBlog = () => {
let match = useRouteMatch();
    return (

<div class="container">
  <div class="row">
    <div class="col-4">
      <div class="img__wrap">
        <Link to={`${match.url}/NewZealand`} style={{ textDecoration: 'none' }}>
          <img src={NZ} alt="New Zealand" />
            <div class="polaroid">
              <p class="img__description">New Zealand</p>
          </div>
        </Link>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <Link to={`${match.url}/Australia`} style={{ textDecoration: 'none' }}>
          <img src={OperaHouse} alt="Australia" />
            <div class="polaroid">
              <p class="img__description">Australia</p>
            </div>
        </Link>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <img src={London} alt="London" />
          <div class="polaroid">
            <p class="img__description">London</p>
          </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="img__wrap">
        <img src={Rome} alt="Rome" />
          <div class="polaroid">
            <p class="img__description">Rome</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <img src={Paris} alt="Paris" />
          <div class="polaroid">
            <p class="img__description">Paris</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <img src={Germany} alt="Germany" />
          <div class="polaroid">
            <p class="img__description">Germany</p>
          </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="img__wrap">
        <img src={Gettysburg} alt="Gettysburg" />
          <div class="polaroid">
            <p class="img__description">Gettysburg</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <img src={Belgium} alt="Belgium" />
          <div class="polaroid">
            <p class="img__description">Belgium</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img__wrap">
        <img src={Austria} alt="Austria" />
          <div class="polaroid">
            <p class="img__description">Austria</p>
          </div>
      </div>
    </div>
  </div>


</div>
);
}


export default TravelBlog;
