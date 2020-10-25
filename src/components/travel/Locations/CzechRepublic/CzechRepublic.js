import React from 'react';
import '../Locations.scss';
import Czech from './CzechRepublicPhotos/Czech.jpeg';
import CeskyKrumlov from './CzechRepublicPhotos/CeskyKrumlov.jpeg';
import House from './CzechRepublicPhotos/House.jpeg';
import Hotel from './CzechRepublicPhotos/Hotel.jpeg';
import Prague from './CzechRepublicPhotos/Prague.jpeg';
import Map from './CzechRepublicPhotos/Map.jpg';
import Rain from './CzechRepublicPhotos/Rain.jpeg';
import Sisters from './CzechRepublicPhotos/Sisters.jpeg';
import TrainTracks from './CzechRepublicPhotos/TrainTracks.jpeg';

import { Link } from 'react-router-dom';

const CzechRepublic = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">A few days in Czech Republic</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={CeskyKrumlov} alt="Czech Republic" />
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

                <hr />

                <div class="blog-post">
                  <h2 class="blog-post-title">Prague & Český Krumlov</h2>
                  <p class="blog-post-meta">May 17-18, 2016</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Prague} alt="Prague" />
                      <figcaption class="blog-photo-caption">Prague Riverfront</figcaption>
                  </figure>

                  <p>Our trip began with meeting the other members of our riding group, about 15 others, in Prague the capital of the Czech Republic. From there we were shuttled a few hours away to Český Krumlov, a very quaint and medieval town. We had a warm up ride and explored the area then dined on bohemian courses such as rabbit and pheasant. The trip my family and I chose to go on included biking through the Czech Republic, Germany, and Austria.</p>

                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={Sisters} alt="Sisters" />
                      <figcaption class="blog-photo-caption">Sisters</figcaption>
                  </figure>

                  <p>The second day included biking through tranquil countryside, enjoying the scenery and eating local food.</p>

                </div>

                <hr />

                <div class="blog-post">
                  <h2 class="blog-post-title">Crossing the Border into Germany</h2>
                  <p class="blog-post-meta">May 19, 2016</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={TrainTracks} alt="Train Tracks" />
                      <figcaption class="blog-photo-caption">Šumava National Park</figcaption>
                  </figure>

                  <p>My favorite day of the trip was biking across the border into Germany via the Šumava National Park. We began the 24 mile trip through the bohemian forest by following an old train track that wound in and out of our path. The woodlands was extremely peaceful and we didn't see another soul the entire time.</p>
                  <p>Around midday however we were caught in a rain storm and had to finish the rest of the trip biking through a steady downpour. Ending at a tavern we were cold and soaking wet but luckily they served hot soup and mulled wine. Nothing had ever tasted so good!!</p>

                  <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="./Germany">To Germany</a>
                  </nav>

                  <br />

                  <figure class="figure">
                    <img class="vertical-photo" src={Rain} alt="Rainy Day" />
                      <figcaption class="blog-photo-caption">Caught in a rain storm</figcaption>
                  </figure>

                </div>

                <hr />

                <nav class="blog-pagination">
                  <a class="btn btn-outline-primary" href="/">Home</a>
                  <a class="btn btn-outline-secondary" href="/Travel">Back</a>
                </nav>

              </div>

              <aside class="col-md-4 blog-sidebar">
                <div class="p-3 mb-3 bg-light rounded">
                  <h4 class="font-italic">Český Krumlov, CZ</h4>
                  <p class="mb-0">Pictured above, the small town of Český Krumlov located in the South Bohemia region of the Czech Republic.</p>
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
                  <img id="location-images" src={Hotel} alt="Hotel" />
                  <p id="caption">Our Hotel Room</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={House} alt="House" />
                  <p id="caption">A Family Home</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default CzechRepublic;
