import React from 'react';
import '../Locations.scss';
import StPeters from './ItalyPhotos/StPeters.jpg';
import TreviFountain from './ItalyPhotos/TreviFountain.jpeg';
import Newspaper from './ItalyPhotos/Newspaper.jpeg';
import BoardingPass from './ItalyPhotos/BoardingPass.jpeg';
import Colosseum from './ItalyPhotos/Colosseum.jpeg';
import HallOfMaps from './ItalyPhotos/HallOfMaps.jpeg';
import Pantheon from './ItalyPhotos/Pantheon.jpg';
import PantheonSide from './ItalyPhotos/PantheonSide.jpeg';
import Pizza from './ItalyPhotos/Pizza.jpeg';

import { Link } from 'react-router-dom';

const Italy = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">48 Hours in Rome</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={TreviFountain} alt="The Trevi Fountain" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">Rome Takeaways</h2>
                  <p>One of the exciting things about flying stand by is that you might have to make some last minute change of plans when the plane runs out of seats. Trying to get to Prague for a family biking trip, my sister and mother made it on the flight but my brother and I had to come up with a new way to get to the Czech Republic. As we were walking down the terminal trying to think of something we saw a sign that said <em>Rome - Now Boarding</em>... so we hopped on!</p>
                </div>

                <figure class="figure">
                  <img class="blog-photo" src={BoardingPass} alt="Boarding Pass" />
                    <figcaption class="blog-photo-caption">Boarding Pass</figcaption>
                </figure>

                <p>We had only a few days before we were due to be in Prague for the <a href="https://www.vbt.com/?utm_source=googles&utm_medium=cpc&utm_campaign=bcm_vbt_pure%20brand_ps_br&utm_term=vbt%20bike&cid=BCM_VBT_Pure%20Brand_PS_Branded&ag=VBT_Phrase&pmf=GOOGLE&kw=vbt%20bike&gclid=Cj0KCQjwuL_8BRCXARIsAGiC51B2qwbM-hvAVr0WAlqyI-bjy6KmPSKrh33VyZ6mVNguSEDchq-aeQYaAuR1EALw_wcB&gclsrc=aw.ds" target="_blank"> VBT</a> family bike trip so of course we had to explore all things that is Rome in less than 48 hours. Jetlagged and exhausted we managed to cross a few things off the list with the aid of Italian pizza, espressso shots, and wine along the way!</p>
                <p>What we saw:</p>
                <ul>
                  <li>The Colosseum</li>
                  <li>Parco del Colle Oppio</li>
                  <li>The Pantheon</li>
                  <li>Trevi Fountain</li>
                  <li>Vatican City</li>
                  <li>The Colosseum</li>
                </ul>

                <hr />

                <div class="blog-post">
                  <h2 class="blog-post-title">The Colosseum</h2>
                  <p class="blog-post-meta">May 15, 2016</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Colosseum} alt="Colosseum" />
                      <figcaption class="blog-photo-caption">The Colosseum</figcaption>
                  </figure>

                  <p>In my mind I thought the Colosseum would be perhaps in a distant field that you had to hike to. The reality is that once you reach the metro stop you exit out into a crowded busy street surrounded by restaurants, shops, and tourists. Right in the middle of it all is the Colosseum.</p>
                  <p>The ampitheater was huge and I can only imagine the atmosphere when the place was packed full with an audience.</p>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Vatican City</h2>
                  <p class="blog-post-meta">May 16, 2016</p>

                  <figure class="figure">
                    <img class="blog-photo" src={StPeters} alt="St. Peters" />
                      <figcaption class="blog-photo-caption">St. Peters</figcaption>
                  </figure>

                  <p>You can't visit Rome without visiting Vatican City. Located in Rome it is actually its own country, spanning 121 acres - the smallest country in the world.</p>
                  <p>Vatican City holds many fascinating things to see such as St. Peters Tomb, the Sistine Chapel, the Vatican Obelisk taken from Egypt, and more.  One of the more memorable and perhaps less famous areas of interest to me in the Vatican was the giant gallery of maps. The hall featured intricate and huge wall-sized maps of Italy that were fascinating to see.</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={HallOfMaps} alt="Gallery of Maps" />
                      <figcaption class="blog-photo-caption">Gallery of Maps</figcaption>
                  </figure>

                  <p>Now off to Prague to join the rest of the family, addio Italia!</p>
                  <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="./CzechRepublic">To the Czech Republic</a>
                  </nav>

                  <br />
                  <br />

                  <figure class="figure">
                    <img class="blog-photo" src={Newspaper} alt="Newspaper" />
                      <figcaption class="blog-photo-caption">Italian Newspaper and Tea</figcaption>
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
                  <h4 class="font-italic">Rome, IT</h4>
                  <p class="mb-0">Pictured above, the famous Trevi Fountain.</p>
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
                  <img id="location-images" src={PantheonSide} alt="PantheonSide" />
                  <p id="caption">Pantheon</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={Pizza} alt="Pizza" />
                  <p id="caption">Italian Pizza</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Italy;
