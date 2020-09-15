import React from 'react';
import NZ from './photos/NZ.jpg';
import './Travel.scss';

const Travel = () => {
    return (
      <div class="polaroid">
        <img src={NZ} alt="New Zealand Photo" />
        <div class="container">
        <p>New Zealand</p>
        </div>
      </div>
,(
        <div align="center">
          <div>
          <iframe src="https://www.google.com/maps/d/embed?mid=10JpIjFZ83-HbjU0p1v80XSXIBjdbsWfO" width="740" height="580"></iframe>
          </div>
        </div>
)
    );
}

export default Travel;