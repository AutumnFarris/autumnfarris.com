import React from 'react';
import '../Locations.scss';
import ThreeSisters from './AustraliaPhotos/ThreeSisters.jpg';
import BlueMountains from './AustraliaPhotos/BlueMountains.jpeg';
import BondiBeach from './AustraliaPhotos/BondiBeach.jpg';

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
                  <p class="blog-post-meta">June 2018</p>

                  <figure class="figure">
                    <img class="blog-photo" src={BondiBeach} alt="Bondi Beach" />
                      <figcaption class="blog-photo-caption">Bondi Beach</figcaption>
                  </figure>

                  <p>I spent my 8 weeks living in Wellington, the quaint capital of New Zealand. One of the more unique things I found to do near the city was mountain biking.</p>
                  <p>Just a short 40 minute bus ride away gives you access to <a href="https://makarapeak.bike/" target="_blank">Makara Peak Mountain Biking Park</a>. No need to pack your own, you can easily rent bikes at the nearby <a href="https://www.mudcycles.co.nz/" target="_blank">Mud Cycle</a>.</p>
                  <p>The park was full of amazing views and a great way to experience Wellington like a local. If you're scared of heights this trail may not be for you as it features a swinging bridge that you must cross to continue on.</p>

                  <hr />
                  <h3>Water Touch Bungy Jumping in Taupo</h3>

                </div>

                <hr />
                <div class="blog-post">
                  <h2 class="blog-post-title">Blue Mountains</h2>
                  <p class="blog-post-meta">June 2018</p>

                  <figure class="figure">
                    <img class="blog-photo" src={BlueMountains} alt="Blue Mountains" />
                      <figcaption class="blog-photo-caption">Blue Mountains</figcaption>
                  </figure>

                  <p>The South Island was my favorite of the two to explore in regards to the mind blowing beauty and uniqueness of it. You can't go wrong with what you choose to see and do, every turn on the road will take your breath away.</p>
                  <p>Of all the alluring landscapes two places stood out above the rest, Mt. Cook and The Church of the Good Sheppard.</p>

                  <hr />

                </div>

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
                    <li><a href="#">Gettysburg 200?</a></li>
                    <li><a href="#">London 2009</a></li>
                    <li><a href="#">Paris 2009, 2015, & 2018</a></li>
                    <li><a href="#">Belgium 2015</a></li>
                    <li><a href="#">Czech Republic 2016</a></li>
                    <li><a href="#">Italy 2016</a></li>
                    <li><a href="#">Germany 2016 & 2018</a></li>
                    <li><a href="#">Austria 2016</a></li>
                    <li><a href="#">Australia 2018</a></li>
                    <li><a href="#">New Zealand 2018</a></li>
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
                  <img id="location-images" src={ThreeSisters} alt="The Three Sisters" />
                  <p id="caption">The Three Sisters</p>
                </div>
                <div class="location-polaroids rotate_left">
                  <img id="location-images" src={BondiBeach} alt="Bondi Beach" />
                  <p id="caption">Bondi Beach</p>
                </div>
              </div>
            </div>
            <br />
            <br />
        </div>

    );
}

export default Australia;
