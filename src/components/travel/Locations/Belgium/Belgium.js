import React from 'react';
import '../Locations.scss';
import Atomium from './BelgiumPhotos/Atomium.jpeg';
import Beer from './BelgiumPhotos/Beer.jpeg';
import Brugge from './BelgiumPhotos/Brugge.jpg';
import MarketSquare from './BelgiumPhotos/MarketSquare.jpeg';
import Elvis from './BelgiumPhotos/Elvis.jpeg';
import InsideAtomium from './BelgiumPhotos/InsideAtomium.jpeg';
import MannequinPis from './BelgiumPhotos/MannequinPis.jpeg';
import Soldiers from './BelgiumPhotos/Soldiers.jpeg';
import Street from './BelgiumPhotos/Street.jpeg';
import Tips from './BelgiumPhotos/Tips.jpeg';

import { Link } from 'react-router-dom';

const Belgium = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">Unexpected days in Belgium</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={MarketSquare} alt="Market Square" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">Belgium Takeaways</h2>
                  <p>Finding myself unexpectedly in a country I had never considered visiting before, I was quite delighted in the culture, atmosphere, and fascinating history the capital and surrounding towns had to offer.</p>

                  <p>Here I learned about Belgium's version of their involvement in World War I, the Mannequin Pis, Trappist beer, and Belfry of Bruges. I discovered my favorite beer, the Leffe Brune, and visited the giant Atomium as well as my first Planetarium.</p>

                  <p>Admittedly it is now one of my favorite places I have travelled to!</p>
                </div>

                <hr />

                <div class="blog-post">
                  <h2 class="blog-post-title">Brussels</h2>
                  <p class="blog-post-meta">January, 2015</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={Atomium} alt="Atomium" />
                      <figcaption class="blog-photo-caption">The Atomium</figcaption>
                  </figure>

                  <p>The atomium, pictured above, was constructed for the 1958 Brussel's World Fair. The structure stands 335 ft. tall and you can enter five of the spheres for exhibits.  The top sphere contains a restaurant and panoramic views of Brussels.</p>

                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={InsideAtomium} alt="Inside the Atomium" />
                      <figcaption class="blog-photo-caption">Inside the Atomium with Brussels in the background.</figcaption>
                  </figure>

                  <hr />
                  <br />

                  <div class="blog-post">
                    <h3 class="blog-post-title">Manneken Pis</h3>

                    <figure class="figure">
                      <img class="vertical-photo" src={MannequinPis} alt="Mannequin Pis" />
                        <figcaption class="blog-photo-caption">The Manneken Pis</figcaption>
                    </figure>

                    <p>Dating back to the 1600s when the original statue was put in place, the Manneken Pis (Dutch for "Little Pissing Man"), has quite the history and symbolism!</p>
                    <p>From surviving the bombardment of Brussels by the French Army to being stolen many times, once even ending up in the bottom of the Charleroi Canal, the statue is perhaps most well known for its many costume representations.  The orginal is now on display in the Brussels City Museum along with its wardrobe of over 1,000 different outfits!</p>
                    <p>These costumes range from representing other countries to more comical dipictions of Dracula or Elvis Presley.</p>

                    <figure class="figure">
                      <img class="vertical-photo" src={Elvis} alt="Elvis" />
                        <figcaption class="blog-photo-caption">One of the many Manneken Pis' outfits, Elvis.</figcaption>
                    </figure>

                  </div>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Bruges, Belgium</h2>
                  <p class="blog-post-meta">January, 2015</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={Brugge} alt="Brugge" />
                      <figcaption class="blog-photo-caption">Belfry of Bruges</figcaption>
                  </figure>

                  <p>Exploring Brugge was truly delightful. Anyone who has watched <a href="https://en.wikipedia.org/wiki/In_Bruges" target="_blank"><em>In Bruges</em></a> with Colin Farrell may already be familiar with the Belfry of Bruges, the medieval bell tower that dominates the city square.</p>
                  <p>A narrow staircase of 366 steps takes you to the top which leans about a meter to the east. Unfortunately at the time of my visit entry wasn't available to the public as it usually is, however it was still remarkable to see.</p>
                  <p>In Bruges I also discovered trappist beer, a delicious beer brewed by Trappist monks. <q>Fourteen monasteries—six in Belgium, two in the Netherlands, and one each in Austria, Italy, England, France, and the United States—produce Trappist beer as recognized by the International Trappist Association. </q></p>
                  <p>Although not inexpensive, if you're a beer connoisseur these are a must try!</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={Beer} alt="Beer" />
                      <figcaption class="blog-photo-caption">Trappist Beer</figcaption>
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
                  <h4 class="font-italic">Bruges, BE</h4>
                  <p class="mb-0">Pictured above, Markt ("Market Square") of Bruges located in the heart of the city.</p>
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
                  <img id="location-images" src={Tips} alt="Tips" />
                  <p id="caption">Poor Bieber</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={Soldiers} alt="Soldiers" />
                  <p id="caption">Army & Manneken Pis</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Belgium;
