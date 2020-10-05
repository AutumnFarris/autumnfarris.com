import React from 'react';
import '../Locations.scss';
import ArthursPass from './NewZealandPhotos/ArthursPass.jpg';

const NewZealand = () => {
    return (
      <div>
        <div id="header">
          <h1>8 Weeks in New Zealand</h1>
        </div>
        <div>
          <img src={ArthursPass} alt="Arthur's Pass" />
        </div>
      </div>
    );
}

export default NewZealand;
