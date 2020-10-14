import React from 'react';
import '../Locations.scss';
import ArthursPass from './NewZealandPhotos/ArthursPass.jpg';
import FranzJosefGlacier from './NewZealandPhotos/FranzJosefGlacier.jpg';
import MtRuapehu from './NewZealandPhotos/MtRuapehu.jpg';
import WellingtonSunrise from './NewZealandPhotos/WellingtonSunrise.jpg';

const NewZealand = () => {
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

                <p>I came to New Zealand during the American summer of 2018 (<em>New Zealand's winter</em>) for an 8 week internship in computer programming. By far my favorite country that I've traveled to, I'll attempt to keep these entries only about my most favorite out of my very long list of favorite things about this amazing country.
                Additionally, I'll choose things that I found unique and that you can't perhaps read about on every other travel blog about New Zealand.</p>
              </div>

              <div class="blog-post">
                <h2 class="blog-post-title">North Island</h2>
                <p class="blog-post-meta">June 2018 - August 2018</p>
                
                <img id ="blog-photos" src={WellingtonSunrise} alt="Wellington Harbor" />

                <p>Wellington Harbor —— A short 5 minute walk from my place of residence during my 8 week stay.</p>
                <hr />
                <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <h2>Heading</h2>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                <h3>Sub-heading</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <ul>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                <ol>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                </ol>
              </div>

              <div class="blog-post">
                <h2 class="blog-post-title">South Island</h2>
                <p class="blog-post-meta">June 2018 - August 2018</p>

                <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </div>

              <nav class="blog-pagination">
                <a class="btn btn-outline-primary" href="#">Home</a>
                <a class="btn btn-outline-secondary" href="#">Next</a>
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
                <img id="location-images" src={MtRuapehu} alt="Mt. Ruapehu" />
                <p id="caption">Mt. Ruapehu</p>
              </div>
              <div class="location-polaroids rotate_left">
                <img id="location-images" src={FranzJosefGlacier} alt="FranzJosefGlacier" width="284" height="213" />
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
