import React from 'react';
import '../Locations.scss';
import ArthursPass from './NewZealandPhotos/ArthursPass.jpg';
import FranzJosefGlacier from './NewZealandPhotos/FranzJosefGlacier.jpg';
import MtRuapehu from './NewZealandPhotos/MtRuapehu.jpg';

const NewZealand = () => {
    return (

      <div class="container-fluid">
        <div id="row">
          <div id="col-sm-12">
            <div id="location-header">
              <h1>8 Weeks in New Zealand</h1>
            </div>
            <div>
              <img src={ArthursPass} alt="Arthur's Pass" />
            </div>
            <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
             officia deserunt mollit anim id est laborum.
             </h6>
             <br />
             <h6>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
             in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
             </h6>
             </div>
             </div>
          <div class="row">
            <div class="col">
              <div class="location-polaroids rotate_right">
                <img id="location-images" src={MtRuapehu} alt="Mt. Ruapehu" />
                <p id="caption">Mt. Ruapehu</p>
              </div>
              <div class="location-polaroids rotate_left">
                <img id="location-images" src={FranzJosefGlacier} alt="FranzJosefGlacier" width="284" height="213" />
                <p id="caption">Franz Josef Glacier</p>
              </div>
            </div>
          </div>

      </div>

    );
}

export default NewZealand;
