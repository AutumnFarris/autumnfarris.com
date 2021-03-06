import React from 'react';
import '../Locations.scss';
import BigBen from './LondonPhotos/BigBen.jpg';
import Church from './LondonPhotos/Church.jpg';
import Eurostar from './LondonPhotos/Eurostar.jpg';
import InTheEye from './LondonPhotos/InTheEye.jpg';
import LondonEye from './LondonPhotos/LondonEye.jpg';
import Pod from './LondonPhotos/Pod.jpg';
import { Link } from 'react-router-dom';

const London = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">A few days in London</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={Church} alt="London Church" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">London</h2>
                  <p class="blog-post-meta">August, 2009</p>

                  <figure class="figure">
                    <img class="blog-photo" src={LondonEye} alt="London Eye" />
                      <figcaption class="blog-photo-caption">The London Eye</figcaption>
                  </figure>

                  <p>To celebrate my brother getting a job with Delta and also my high school graduation we took my first trip to Europe in 2009. First stop was a few days in London and then the rest of the week, Paris!</p>
                  <p>We saw all the typical stuff like the gigantic 'London Eye' ferris wheel with views of Big Ben and met many friendly locals along the way.</p>
                  <p>Please forgive my rather less than razor-sharp images, I think I was using an iPhone 3Gs back then...</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Pod} alt="Pod" />
                      <figcaption class="blog-photo-caption">One of the pods of the London Eye</figcaption>
                  </figure>

                </div>

                <hr />
                <div class="blog-post">
                  <h3 class="blog-post-title">Eurostar</h3>
                  <p class="blog-post-meta">August, 2009</p>

                  <p>Now off to Paris via the Eurostar, a train that travels underwater through the Channel Tunnel!</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Eurostar} alt="Eurostar" />
                      <figcaption class="blog-photo-caption">Onboard the Eurostar</figcaption>
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
                  <h4 class="font-italic">London, EN</h4>
                  <p class="mb-0">Pictured above, a local church in the streets of London.</p>
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
                  <img id="location-images" src={BigBen} alt="Big Ben" />
                  <p id="caption">Big Ben</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={InTheEye} alt="Inside the London Eye" />
                  <p id="caption">Inside the London Eye</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default London;
