import React from 'react';
import '../Locations.scss';
import Map from './AustriaPhotos/Map.jpg';
import Barge from './AustriaPhotos/Barge.jpeg';
import Church from './AustriaPhotos/Church.jpeg';
import Melk from './AustriaPhotos/Melk.jpeg';
import Abbey from './AustriaPhotos/Abbey.jpeg';
import OnTop from './AustriaPhotos/OnTop.jpeg';
import StMichaels from './AustriaPhotos/StMichaels.jpeg';
import Book from './AustriaPhotos/Book.jpeg';
import Library from './AustriaPhotos/Library.jpeg';
import MariaTaferl from './AustriaPhotos/MariaTaferl.jpeg';
import SistersAustria from './AustriaPhotos/SistersAustria.jpeg';

import { Link } from 'react-router-dom';

const Austria = () => {

    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">A few days in Austria</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={SistersAustria} alt="Sisters" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">VBT Biking</h2>
                  <p><a href="https://www.vbt.com/about/discover-vbt/" target="_blank">VBT</a> biking offers a fun way to explore areas of different countries via bicycle while being guided by a local.  It's a chance to escape touristy capitals and experience areas off the beaten path. </p>

                  <figure class="figure">
                    <img class="blog-photo" src={Map} alt="Map" />
                      <figcaption class="blog-photo-caption">Our bike path through 3 countries.</figcaption>
                  </figure>

                </div>

                <div class="blog-post">
                  <h2 class="blog-post-title">St. Michael's, Maria Taferl, and the Danube</h2>
                  <p class="blog-post-meta">May, 2016</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={StMichaels} alt="St. Michael's" />
                      <figcaption class="blog-photo-caption">St. Michael's Church</figcaption>
                  </figure>

                  <p>Austria revealed many pleasant rolling hills and vineyards while also holding an abundance of old abbeys and cathedrals. One stop we made was at St. Michael's church in Weissenkirchen. This church dates all the way back to 987! </p>

                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={MariaTaferl} alt="Maria Taferl" />
                      <figcaption class="blog-photo-caption">Inside Maria Taferl</figcaption>
                  </figure>

                  <p>Although rather plain on the outside, once you step inside the Maria Taferl church you see exquisite detail and ample amounts of gold leaf.</p>

                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={Barge} alt="Barge" />
                      <figcaption class="blog-photo-caption">Sailing the Danube</figcaption>
                  </figure>

                  <p> Speeding up our journey, we gained a bit of ground by taking a break from pedalling and sailing down the river Danube, the second biggest river in Europe that also divides the border between Austria and Germany.</p>

                </div>

                <hr />

                <div class="blog-post">
                  <h2 class="blog-post-title">Melk and the Benedictine Abbey</h2>
                  <p class="blog-post-meta">May, 2016</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Abbey} alt="Abbey" />
                      <figcaption class="blog-photo-caption">Melk Abbey</figcaption>
                  </figure>

                  <p> We enjoyed visiting many churches and drinking local wine as well as exploring narrow cobblestone streets in towns such as Melk. Located inside this burough is the magnificent Benedictine monastery, the Melk Abbey.  We got a chance to explore some of the many courtyards and tremendous library containing over 90,000 rare voulmes and manuscripts.  This concluded our journey after spending a few days exploring the countryside and we were shuttled back to Vienna, the capital of Austria to make our departure back to the U.S.</p>

                  <br />

                  <figure class="figure">
                    <img class="vertical-photo" src={Library} alt="Library" />
                      <figcaption class="blog-photo-caption">A small section of the library</figcaption>
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
                  <h4 class="font-italic">Nibelungengau, AT</h4>
                  <p class="mb-0">Pictured above, gazing upon the Maria Taferl church with my sister.</p>
                </div>

                <div class="p-3">
                  <h4 class="font-italic">Travels</h4>
                  <ol class="list-unstyled mb-0">
                    <li><Link to={`./Gettysburg`} style={{ textDecoration: 'none' }}>Gettysburg 200?</Link></li>
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
                  <img id="location-images" src={OnTop} alt="St. Michaels" />
                  <p id="caption">St. Michael's</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={Book} alt="Book" />
                  <p id="caption">A rare manuscript</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Austria;
