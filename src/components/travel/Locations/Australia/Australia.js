import React from 'react';
import '../Locations.scss';
import ThreeSisters from './AustraliaPhotos/ThreeSisters.jpg';
import BlueMountains from './AustraliaPhotos/BlueMountains.jpeg';
import BondiBeach from './AustraliaPhotos/BondiBeach.jpg';
import Hiking from './AustraliaPhotos/Hiking.jpeg';
import KangarooSteak from './AustraliaPhotos/KangarooSteak.jpg';
import AustraliaPassport from './AustraliaPhotos/AustraliaPassport.jpeg';

import { Link } from 'react-router-dom';

const Australia = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">72 Hours in Australia</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={BlueMountains} alt="Blue Mountains" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">Sydney</h2>
                  <p class="blog-post-meta">June 9-12, 2018</p>

                  <figure class="figure">
                    <img class="blog-photo" src={BondiBeach} alt="Bondi Beach" />
                      <figcaption class="blog-photo-caption">Bondi Beach</figcaption>
                  </figure>

                  <p>A trip to Sydney wouldn't be complete without checking out the famous Bondi Beach!</p>
                  <p>This picture was taken at sunrise where I enjoyed a breakfast sandwich and a hot cup of coffee.  Many of the locals came out to catch the waves, walk their dog, or fancy a morning jog in the wee hours of what is winter for that part of the world.</p>
                  <p>I also enjoyed walking up the steps of the Opera House, exploring the city on foot, and trying out delicious kangaroo steak!</p>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Blue Mountains</h2>
                  <p class="blog-post-meta">June 11, 2018</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Hiking} alt="Hiking" />
                      <figcaption class="blog-photo-caption">Hiking in the Blue Mountains</figcaption>
                  </figure>

                  <p>A few hours on a train will take you from Sydney to the end of the line at Katoomba Station where you can hike the Blue Mountains of New South Wales. An easy day trip from the city gets you out into beautiful scenery and a chance to really stretch out your legs.</p>
                  <p>Pictured below are the <a href="https://www.bluemts.com.au/info/thingstodo/threesisters/">Three Sisters</a>, an unusual rock formation of the Blue Mountains.</p>

                  <figure class="figure">
                    <img class="blog-photo" src={ThreeSisters} alt="The Three Sisters" />
                      <figcaption class="blog-photo-caption">The Three Sisters</figcaption>
                  </figure>

                  <hr />

                </div>

                <nav class="blog-pagination">
                  <a class="btn btn-outline-primary" href="/">Home</a>
                  <a class="btn btn-outline-secondary" href="/Travel">Back</a>
                </nav>

              </div>

              <aside class="col-md-4 blog-sidebar">
                <div class="p-3 mb-3 bg-light rounded">
                  <h4 class="font-italic">New South Wales, AU</h4>
                  <p class="mb-0">Pictured above, the Blue Mountains located just northwest of Sydney.</p>
                </div>

                <div class="p-3">
                  <h4 class="font-italic">Travels</h4>
                  <ol class="list-unstyled mb-0">
                    <li><Link to={`./London`} style={{ textDecoration: 'none' }}>London 2009</Link></li>
                    <li><Link to={`./Paris`} style={{ textDecoration: 'none' }}>Paris 2009, 2015, & 2018</Link></li>
                    <li><Link to={`./Belgium`} style={{ textDecoration: 'none' }}>Belgium 2015</Link></li>
                    <li><Link to={`./Italy`} style={{ textDecoration: 'none' }}>Italy 2016</Link></li>
                    <li><Link to={`./CzechRepublic`} style={{ textDecoration: 'none' }}>Czech Republic 2016</Link></li>
                    <li><Link to={`./Germany`} style={{ textDecoration: 'none' }}>Germany 2016 & 2018</Link></li>
                    <li><Link to={`./Austria`} style={{ textDecoration: 'none' }}>Austria 2016</Link></li>
                    <li><Link to={`./Australia`} style={{ textDecoration: 'none' }}>Australia 2018</Link></li>
                    <li><Link to={`./NewZealand`} style={{ textDecoration: 'none' }}>New Zealand 2018</Link></li>
                  </ol>
                </div>

                <div class="p-3">
                  <h4 class="font-italic">Elsewhere</h4>
                  <ol class="list-unstyled">
                    <li><a href="https://github.com/autumnfarris">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/autumnfarris/">Linkedin</a></li>
                    <li><a href="https://www.instagram.com/autumnlfarris/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/autumn.farris.35">Facebook</a></li>
                  </ol>
                </div>
              </aside>

            </div>

          </main>

            <div class="row">
              <div class="col-sm">
                <div class="location-polaroids rotate_right">
                  <img id="location-images" src={KangarooSteak} alt="Kangaroo Steak" />
                  <p id="caption">Kangaroo Steak</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={AustraliaPassport} alt="Passport" />
                  <p id="caption">One Way to Australia!</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Australia;
