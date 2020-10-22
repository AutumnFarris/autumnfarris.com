import React from 'react';
import NZ from './photos/NZ.jpg';
import OperaHouse from './photos/OperaHouse.JPG';
import CzechRepublic from './photos/CzechRepublic.jpeg';
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
      <div class="img-wrap">
        <Link to={`${match.url}/NewZealand`} style={{ textDecoration: 'none' }}>
          <img id="travel-blog-img" src={NZ} alt="New Zealand" />
            <div id="travel-blog-polaroid">
              <p class="img-description">New Zealand</p>
            </div>
        </Link>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <Link to={`${match.url}/Australia`} style={{ textDecoration: 'none' }}>
          <img id="travel-blog-img" src={OperaHouse} alt="Australia" />
            <div id="travel-blog-polaroid">
              <p class="img-description">Australia</p>
            </div>
        </Link>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <Link to={`${match.url}/CzechRepublic`} style={{ textDecoration: 'none' }}>
          <img id="travel-blog-img" src={CzechRepublic} alt="Czech Republic" />
            <div id="travel-blog-polaroid">
              <p class="img-description">Czech Republic</p>
            </div>
        </Link>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="img-wrap">
        <Link to={`${match.url}/Italy`} style={{ textDecoration: 'none' }}>
          <img id="travel-blog-img" src={Rome} alt="Rome" />
            <div id="travel-blog-polaroid">
              <p class="img-description">Rome</p>
            </div>
        </Link>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <img id="travel-blog-img" src={Paris} alt="Paris" />
          <div id="travel-blog-polaroid">
            <p class="img-description">Paris</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <Link to={`${match.url}/Germany`} style={{ textDecoration: 'none' }}>
          <img id="travel-blog-img" src={Germany} alt="Germany" />
            <div id="travel-blog-polaroid">
              <p class="img-description">Germany</p>
            </div>
        </Link>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="img-wrap">
        <img id="travel-blog-img" src={Gettysburg} alt="Gettysburg" />
          <div id="travel-blog-polaroid">
            <p class="img-description">Gettysburg</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <img id="travel-blog-img" src={Belgium} alt="Belgium" />
          <div id="travel-blog-polaroid">
            <p class="img-description">Belgium</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="img-wrap">
        <img id="travel-blog-img" src={Austria} alt="Austria" />
          <div id="travel-blog-polaroid">
            <p class="img-description">Austria</p>
          </div>
      </div>
    </div>
  </div>


</div>
);
}


export default TravelBlog;
