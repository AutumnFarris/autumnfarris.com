import React from 'react';
import '../Locations.scss';
import ArthursPass from './NewZealandPhotos/ArthursPass.jpg';
import Haka from './NewZealandPhotos/Haka.jpg';
import FranzJosefGlacier from './NewZealandPhotos/FranzJosefGlacier.jpg';
import MtRuapehu from './NewZealandPhotos/MtRuapehu.jpg';
import WellingtonSunrise from './NewZealandPhotos/WellingtonSunrise.jpg';
import BungyJumping from './NewZealandPhotos/BungyJumping.jpg';
import WildAtHeartBridge from './NewZealandPhotos/WildAtHeartBridge.jpg';
import HukaFalls from './NewZealandPhotos/HukaFalls.jpg';
import LakePukaki from './NewZealandPhotos/LakePukaki.jpg';
import MtCook from './NewZealandPhotos/MtCook.jpg';
import AbelTasman from './NewZealandPhotos/AbelTasman.jpg';
import Church from './NewZealandPhotos/Church.jpg';
import { Link, useRouteMatch } from "react-router-dom";

const NewZealand = () => {
  let match = useRouteMatch();
    return (

    <div class="container">
      <header class="blog-header py-1">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col text-center">
            <h1 class="blog-header-logo text-dark">8 Weeks in New Zealand</h1>
          </div>
        </div>
      </header>

    <div class="jumbotron p-3 p-md-0">
      <img id="main-image" src={ArthursPass} alt="Arthur's Pass" />
    </div>

    <main role="main" class="container">
          <div class="row">
            <div class="col-md-8 blog-main">
              <h3 class="pb-3 mb-4 font-italic border-bottom">

              </h3>

              <div class="blog-post">
                <h2 class="blog-post-title">New Zealand Takeaways</h2>
                <p>I came to New Zealand during the American summer of 2018 (<em>New Zealand's winter</em>) for an 8 week internship in computer programming. By far my favorite country that I've travelled to, I'll attempt to keep these entries about only my most favorite out of my very long list of favorite things about this amazing country.
                Additionally, I'll choose things that I found unique and that you can't perhaps read about on every other travel blog about New Zealand.</p>
              </div>

              <div class="blog-post">
                <h2 class="blog-post-title"> The Māori Culture</h2>
                <figure class="figure">
                  <img class="blog-photo" src={Haka} alt="Haka Dance" />
                    <figcaption class="blog-photo-caption">The Haka</figcaption>
                </figure>

                <p>One of the biggest takeaways for me was the people and culture of New Zealand. The locals, also known as kiwis, are well known for being friendly and hospitable and they certainly lived up to that convention.</p>
                <p>Even the history of their people, the Māori, is extremely fascinating to learn about!</p>
                <p>The Māori are the indigenious people of New Zealand believed to have come to the country 1,000 years ago. Impressively rather than becoming modernized over time and losing traditional values, the customs and beliefs are still very much a core of what makes up New Zealand today.</p>
                <p>Perhaps one of the most interesting things about this unique culture is the haka war dance.  This dance was performed originally on battlefields to mentally prepare the warriors.</p>
                <p>The haka is still displayed today and you may have seen New Zealand's rugby team, the All Blacks, perform it on the playing field prior to the start of the game.</p>
                <p>See the haka performed by the All Blacks vs. Australia here:</p>
                <div>
                  <iframe width="750" height="535" src="https://www.youtube.com/embed/I3gbneDt-S4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br />
                <a href="https://www.newzealand.com/int/maori-culture/" target="_blank">Learn more about the Māori culture here:</a>
              </div>

              <div class="blog-post">
                <h2 class="blog-post-title">North Island</h2>
                <p class="blog-post-meta">June 2018 - August 2018</p>

                <figure class="figure">
                  <img class="blog-photo" src={WellingtonSunrise} alt="Wellington Harbor" />
                    <figcaption class="blog-photo-caption">Wellington Harbor at sunrise</figcaption>
                </figure>

                <p>I spent my 8 weeks living in Wellington, the quaint capital of New Zealand. One of the more unique things I found to do near the city was mountain biking.</p>
                <p>Just a short 40 minute bus ride away gives you access to <a href="https://makarapeak.bike/" target="_blank">Makara Peak Mountain Biking Park</a>. No need to pack your own, you can easily rent bikes at the nearby <a href="https://www.mudcycles.co.nz/" target="_blank">Mud Cycle</a>.</p>
                <p>The park was full of amazing views and a great way to experience Wellington like a local. If you're scared of heights this trail may not be for you as it features a swinging bridge that you must cross to continue on.</p>

              <figure class="figure">
                <img class="blog-photo" src={WildAtHeartBridge} alt="Wild At Heart Swing Bridge" />
                  <figcaption class="blog-photo-caption">Wild at Heart Swinging Bridge</figcaption>
              </figure>

                <hr />
                <br />
                <h3>Water Touch Bungy Jumping in Taupo</h3>
                <br />
              <figure class="figure">
                <img src={BungyJumping} class="rounded float-left vertical-photo" alt="Bungy Jumping" />
              </figure>

                <p>This unique bungy jump allows you to dive from 47m into the water below!</p>
                <p>Located in Taupo and just a 10 minute drive from the beautiful ice blue Huka Falls, this was an adventure to remember!</p>

              <figure class="figure">
                <img class="blog-photo" src={HukaFalls} alt="Huka Falls" />
                  <figcaption class="blog-photo-caption">Huka Falls</figcaption>
              </figure>
              </div>

              <hr />
              <div class="blog-post">
                <h2 class="blog-post-title">South Island</h2>
                <p class="blog-post-meta">June 2018 - August 2018</p>

                <figure class="figure">
                  <img class="blog-photo" src={AbelTasman} alt="Abel Tasman" />
                    <figcaption class="blog-photo-caption">Abel Tasman National Park</figcaption>
                </figure>

                <p>The South Island was my favorite of the two to explore in regards to the mind blowing beauty and uniqueness of it. You can't go wrong with what you choose to see and do, every turn on the road will take your breath away.</p>
                <p>Of all the alluring landscapes two places stood out above the rest, Mt. Cook and The Church of the Good Sheppard.</p>

                <hr />

                <h3>The Road to Mount Cook</h3>

                <figure class="figure">
                  <img class="blog-photo" src={LakePukaki} alt="Lake Pukaki" />
                    <figcaption class="blog-photo-caption">Lake Pukaki</figcaption>
                </figure>

                <p>This surreal lake is just one of the many beauties on the road to visit Mt. Cook, a must see.</p>
                <p>Renting a car is the way to go to really be able to take in all the picturesque landscapes the South Island has to offer. Just be warned you will constantly be pulling over to take photos.</p>
                <p>Plus as a bonus you get to learn to drive on the left-hand side of the road!</p>

                <figure class="figure">
                  <img class="blog-photo" src={MtCook} alt="Mt. Cook" />
                    <figcaption class="blog-photo-caption">Mt. Cook</figcaption>
                </figure>

                <p>Every experience in New Zealand is memorable, but Mt. Cook really stood out to me.</p>
                <p>At the end of a road where there are a handful of quaint lodges and hostels to stay in that are surrounded by the stunning mountain range.</p>
                <p>Seeing the sunrise peak over the mountain tops was so pretty and if you're lucky you can see the stars at night if there's no clouds in the sky.</p>
                <p>There are many hikes to explore in the valley and I recommend the popular <a href="https://www.doc.govt.nz/hooker-valley-track" _target="blank">Hooker's Valley Track</a>. This trek will lead you to Hooker Lake with views of Mueller Glacier and Mount Cook.</p>
              </div>

              <h3>The Church of the Good Sheppard</h3>

              <figure class="figure">
                <img class="blog-photo" src={Church} alt="Church of the Good Sheppard" />
                  <figcaption class="blog-photo-caption">Church of the Good Sheppard</figcaption>
              </figure>

              <p>Located on Lake Tekapo this spot is gorgeous during the day but perhaps even more awe-striking at night.  Never have I been in an area where I could see so many stars including the entire Milky Way with the naked eye. It gave me the feeling of being in a snow globe because I was absolutely surrounded by them all the way down to the horizon!</p>
              <p>Unfortunately my iphone 6 couldn't capture this so the photo was taken from <a href="https://www.churchofthegoodshepherd.org.nz/" _target="blank">here</a>.</p>

              <hr />

              <nav class="blog-pagination">
                <a class="btn btn-outline-primary" href="/">Home</a>
                <a class="btn btn-outline-secondary" href="/Travel">Back</a>
              </nav>

            </div>

            <aside class="col-md-4 blog-sidebar">
              <div class="p-3 mb-3 bg-light rounded">
                <h4 class="font-italic">South Island, NZ</h4>
                <p class="mb-0">Pictured above, a small glimpse of the beauty seen on the drive through Arthur's Pass.</p>
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
                <img id="location-images" src={MtRuapehu} alt="Mt. Ruapehu" />
                <p id="caption">Mt. Ruapehu</p>
              </div>
              <div class="location-polaroids rotate_left">
                <img id="location-images" src={FranzJosefGlacier} alt="FranzJosefGlacier" />
                <p id="caption">Franz Josef Glacier</p>
              </div>
            </div>
          </div>
          <br />
          <br />
      </div>

    );
}

export default NewZealand;
