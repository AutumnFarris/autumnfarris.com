import React from 'react';
import '../Locations.scss';
import Map from './GermanyPhotos/Map.jpg';
import Bridge from './GermanyPhotos/Bridge.jpeg';
import Hcastle from './GermanyPhotos/Hcastle.jpeg';
import Ncastle from './GermanyPhotos/Ncastle.jpeg';
import Window from './GermanyPhotos/Window.jpeg';
import Biking from './GermanyPhotos/Biking.jpeg';
import Family from './GermanyPhotos/Family.jpeg';
import Castle from './GermanyPhotos/Castle.jpeg';

import { Link } from 'react-router-dom';

const Germany = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">Germany 2016 & 2018</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={Castle} alt="Castle" />
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
                  <h2 class="blog-post-title">Germany 2016</h2>
                  <p class="blog-post-meta">May, 2016</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Biking} alt="Biking" />
                      <figcaption class="blog-photo-caption">Biking along the Inn</figcaption>
                  </figure>

                  <p>Once in Germany during the bike trip we saw many old churches and explored towns such as Passau. This bohemia area of the country makes you feel like you stepped back into Medieval times.  We biked along a river called Inn and then to gain access to Austria we pedalled across the border via a bridge named Mariensteg.</p>

                  <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="./Austria">To Austria</a>
                  </nav>

                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={Family} alt="Family Photo" />
                      <figcaption class="blog-photo-caption">Family Photo</figcaption>
                  </figure>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Germany 2018</h2>
                  <p class="blog-post-meta">January, 2018</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Ncastle} alt="Neuschwanstein Castle" />
                      <figcaption class="blog-photo-caption">Neuschwanstein Castle</figcaption>
                  </figure>

                  <p>In January of 2018 I went on a trip to Europe with my father.  We spent much of the 10 day trip in Paris and then took a train to Germany to see the famous Neuschwanstein Castle and the nearby Hohenschwangau Castle.</p>
                  <p>Getting to Neuschwanstein Castle via public transportation was no simple feat! We took a train from Paris to the German town of Füssen. From Füssen our only option was a bus to the town of Hohenschwangau, the location of the castle. From there we had two choices, to hire a horse and carriage or to trek one mile up-hill to the fortress. We opted for the scenic trek!</p>
                  <p>Germany is wonderfully breathtaking and we were even lucky to see the countryside during snowfall on our departure ride from Füssen to Frankfurt by train.</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Hcastle} alt="Hohenschwangau Castle" />
                      <figcaption class="blog-photo-caption">Hohenschwangau Castle</figcaption>
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
                  <h4 class="font-italic">Hohenschwangau, DE</h4>
                  <p class="mb-0">Pictured above, Neuschwanstein Castle as viewed from Mary's Bridge. (2018)</p>
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
                  <img id="location-images" src={Bridge} alt="Mariensteg Bridge" />
                  <p id="caption">Mariensteg Bridge</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={Window} alt="Castle Window" />
                  <p id="caption">Castle Window View</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Germany;
