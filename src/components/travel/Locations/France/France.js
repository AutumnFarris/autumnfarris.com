import React from 'react';
import '../Locations.scss';
import Eiffel09 from './FrancePhotos/2009/Eiffel09.jpg';
import Crowd09 from './FrancePhotos/2009/Crowd09.jpg';
import Pyramid15 from './FrancePhotos/2015/Pyramid15.jpeg';
import Catacombs15 from './FrancePhotos/2015/Catacombs15.jpeg';
import Louvre15 from './FrancePhotos/2015/Louvre15.jpg';
import NotreDame15 from './FrancePhotos/2015/NotreDame15.jpeg';
import Vigil15 from './FrancePhotos/2015/Vigil15.jpeg';
import Dad18 from './FrancePhotos/2018/Dad18.jpeg';
import MoulinRouge18 from './FrancePhotos/2018/MoulinRouge18.jpeg';
import Yoga18 from './FrancePhotos/2018/Yoga18.jpeg';
import { Link } from 'react-router-dom';

const France = () => {
    return (

      <div class="container">
        <header class="blog-header py-1">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col text-center">
              <h1 class="blog-header-logo text-dark">A Week in Paris</h1>
            </div>
          </div>
        </header>

      <div class="jumbotron p-3 p-md-0">
        <img id="main-image" src={Pyramid15} alt="Paris" />
      </div>

      <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">

                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">Paris Takeaways</h2>
                    <p>Paris comes high on the recommendation list, it's fairly easy to navigate despite the language barrier and it's packed with cool things to see. I've had the opportunity to visit 3 times and would go back again and again. An entire day is needed to explore just one wing of the Louvre <em>or</em> perhaps the palace of Versailles and gardens if you get a very early start.</p>
                    <p>Two things are worth noting about my trips to Paris. The first, that I was staying in Paris during the Charlie Hebdo terrorist attack in 2015 detailed below. The second, that I was lucky to visit the Notre-Dame before it was sadly damaged by fire in 2019.</p>
                </div>

                <div class="blog-post">
                  <h2 class="blog-post-title">Paris</h2>
                  <p class="blog-post-meta">August, 2009</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Eiffel09} alt="Eiffel Tower" />
                      <figcaption class="blog-photo-caption">Eiffel Tower at night</figcaption>
                  </figure>

                  <p>After a few days in London my brother and I carried on to Paris via the Eurostar.  We spent about a week here and I saw many landmarks and icons I had only heard about in books and movies!</p>
                  <p>I learned to watch out for pick pocketers especially in crowded places such as the Eiffel Tower and the viewpoint around the Mona Lisa! Definitely the best time to travel to popular capital cities are during off season it you can help it and if not then being at locations of interest right when they open is imperative to avoid the mass of people.</p>

                  <figure class="figure">
                    <img class="blog-photo" src={Crowd09} alt="Crowd" />
                      <figcaption class="blog-photo-caption">Crowd trying to see the Mona Lisa</figcaption>
                  </figure>

                  <p>Things we saw in Paris in 2009:</p>
                    <ul>
                      <li>Eiffel Tower</li>
                      <li>The Louvre</li>
                      <li>Moulin Rouge</li>
                      <li>Notre-Dame</li>
                      <li>Sainte-Chapelle</li>
                      <li>Champs-Élysées</li>
                      <li>Arc de Triomphe</li>
                    </ul>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Paris and the Charlie Hebdo Attack</h2>
                  <p class="blog-post-meta">January, 2015</p>

                  <p>Very early on the morning of January 7, 2015 family members in the United States alerted us that a terrorist attack had happened in Paris, about two miles from the hotel we were staying at next to the Notre-Dame.</p>
                  <p>We turned on the TV and immediately saw breaking news from Paris covering the shooting at Charlie Hebdo. 12 people were killed we later found out and 11 others were injured. Over the next few days we heard constant police sirens patrolling the city every 15 minutes and everyone was on edge. Trying to fly out via standby was impossible because all flights were sold out.  Unknowing of what might next happen we fled the country by taking a train to Belgium.</p>
                  <p>Living in the U.S. had given me a sense of security that I never knew I had. You hear about terrorist attacks happening regularly around the world but to be in the midst of one was eye-opening.</p>

                  <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="./Belgium">To Belgium</a>
                  </nav>

                  <br />
                  <br />

                  <figure class="figure">
                    <img class="vertical-photo" src={Vigil15} alt="Notre-Dame" />
                      <figcaption class="blog-photo-caption">Cathédrale Notre-Dame de Paris</figcaption>
                  </figure>

                  <p>Things we saw in Paris in 2015:</p>
                    <ul>
                      <li>Eiffel Tower</li>
                      <li>The Louvre</li>
                      <li>The Catacombs</li>
                      <li>Notre-Dame</li>
                      <li>Champs-Élysées</li>
                      <li>Arc de Triomphe</li>
                    </ul>

                  <hr />

                </div>

                <div class="blog-post">
                  <h2 class="blog-post-title">Paris</h2>
                  <p class="blog-post-meta">January, 2018</p>

                  <figure class="figure">
                    <img class="vertical-photo" src={Dad18} alt="Dad" />
                      <figcaption class="blog-photo-caption">Dad in front of Notre-Dame</figcaption>
                  </figure>

                  <p>Starting our trip off in Paris (we also went to Germany) I got to play a sort of tour guide having seen some of the big stuff in the previous trips.  This time we included the Palace of Versailles, a mind-blowingly massive estate. We planned to spend about half a day there but ended up using the whole day and didn't get to see even a fraction of the almost 2,000 acre gardens.</p>
                  <p>We stayed out late trying French wine one night and walking back to our hotel near the Eiffel Tower around 2am a man approached my dad and while trying to "sell him" some touristy gadgets also attempted to pick his wallet out of his back pocket! Luckily my father had it in his front pocket and the guy ran off just as quickly as he had shown up.</p>

                  <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="./Germany">To Germany</a>
                  </nav>

                  <br />
                  <br />

                  <figure class="figure">
                    <img class="vertical-photo" src={Yoga18} alt="Yoga" />
                      <figcaption class="blog-photo-caption">Yoga at the Louvre!</figcaption>
                  </figure>

                  <p>Things we saw in Paris in 2018:</p>
                    <ul>
                      <li>Eiffel Tower</li>
                      <li>The Louvre</li>
                      <li>Moulin Rouge</li>
                      <li>Notre-Dame</li>
                      <li>Sainte-Chapelle</li>
                      <li>Champs-Élysées</li>
                      <li>Arc de Triomphe</li>
                      <li>Palace of Versailles</li>
                    </ul>

                  <hr />

                </div>

                <nav class="blog-pagination">
                  <a class="btn btn-outline-primary" href="/">Home</a>
                  <a class="btn btn-outline-secondary" href="/Travel">Back</a>
                </nav>

              </div>

              <aside class="col-md-4 blog-sidebar">
                <div class="p-3 mb-3 bg-light rounded">
                  <h4 class="font-italic">Paris, FR</h4>
                  <p class="mb-0">Pictured above, the Louvre Pyramid, also the main entrance to the Louvre Museum.</p>
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
                  <img id="location-images" src={Catacombs15} alt="The Catacombs" />
                  <p id="caption">Catacombs (2015)</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={MoulinRouge18} alt="Moulin Rouge" />
                  <p id="caption">Moulin Rouge (2018)</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default France;
