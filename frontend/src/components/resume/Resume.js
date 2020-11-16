import React, { Component } from 'react';
import './Resume.scss';
import Photo from './resume_photo.jpeg';

class Resume extends Component {
  render() {
    return (
    <div class='page-wrapper'>
      <div class='container'>
        <div class='row row-style'>
          <div class='col-xs main-column'>
            <div id='resume-header'><b>Autumn Farris</b>
            </div>
            <div id='subheader'><i>Programmer, Web developer, Communicator!</i>
            </div>
              <div id='heading-one'>
                <p>SUMMARY</p>
              </div>
                <p>Ambitious clean code developer who thrives on expanding < br/>
                knowledge and skillsets in both the professional and personal
                fields.</p>
              <div id='heading-one'>
                <p>EXPERIENCE</p>
              </div>
              <div id='heading-two'>
                <p><b>Glasswerks</b>, L.A., CA –– <i>Programmer</i></p>
              </div>
              <div id='heading-three'>
                <p>November 2018 - May 2019</p>
              </div>
                <p>Helped develop and deploy customer order tracking web app.</p>
                <p>Implemented Elixir and TDD skills to test and deploy back end logic.</p>
                <p><b>Created portal used daily (2019) –– Programmer</b></p>
              <br />
              <div id='heading-two'>
                <p><b>Common Ledger</b>, Wellington, New Zealand –– <i>Intern</i></p>
              </div>
              <div id='heading-three'>
                <p>June 2018 - August 2018</p>
              </div>
                <p>Assisted in developing and deploying an accounting application.</p>
                <p>Worked closely with developers to manage complex projects.</p>
                <p>Performed in a full stack platform environment using Vue.js, AWS services,
                    TDD/Unit Testing, Terraform, as well as GitHub, Slack, and Scrum practices.</p>
                <p><b>Participated in daily Scrum events (2018) –– Scrum Master</b></p>
              <div id='heading-one'>
                <p>EDUCATION</p>
              </div>
              <div id='heading-two'>
                <p><b>Missouri State University</b> –– <i>Computer Information Systems, B.S.</i></p>
              </div>
              <div id='heading-three'>
                <p>2017 - 2018</p>
              </div>
                <p>Major GPA 3.8/4.0</p>
                <p><b>Association of Information Technology Professionals –– Member</b></p>
                <p><b>Dean's List of Scholastic Achievement (2017 - 2018) –– Honoree</b></p>
              <br />
              <div id ='heading-two'>
                <p><b>Missouri State University</b> –– <i>Communication, B.S.</i></p>
              </div>
              <div id='heading-three'>
                <p>2015 - 2017</p>
              </div>
                <p>Major GPA 4.0/4.0</p>
                <p><b>Dean's List of Scholastic Achievement (2015 - 2017) –– Honoree</b></p>
              <div id='heading-one'>
                <p>ADDITIONAL EXPERIENCE</p>
              </div>
              <div id='heading-two'>
                <p><b>Bair's Sports Grill</b>, Springfield, MO –– <i>Shift Leader</i></p>
              </div>
              <div id='heading-three'>
                <p>June 2013 - May 2018</p>
              </div>
                <p>Bartending and product promotion</p>
                <p>Employee management</p>
                <p>Created new bar beverage to support World Autism Awareness Day</p>
                <p><b>Sold $2,500 in gift cards (2016) –– Contest Winner</b></p>
                <p><b>Employee Of The Month (2015) –– Recipient</b></p>
              <br />
              <div id='heading-two'>
                <p><b>Big Brothers Big Sisters</b>, Springfield, MO –– <i>Intern</i></p>
              </div>
              <div id='heading-three'>
                <p>January 2017 - July 2017</p>
              </div>
                <p>Donor outreach and new lead acquisition</p>
                <p>Update company website</p>
                <p><b>Raised $13,000 for silent auction (2017) –– Surpassed goal by $10,000</b></p>
            </div>

              <div class='col-xs second-column'>
                <div id='contact'>
                  <p id='phone-number'>+1 (417) 350-2445</p>
                  <br />
                  <p id='email'><a href="mailto: autumn@autumnfarris.com">autumn@autumnfarris.com</a></p>
                  <br />
                  <p id='linkedin'><a href="https://www.linkedin.com/in/autumnfarris/">linkedin.com/in/​autumnfarris</a></p>
                </div>
                  <div id='heading-one'>
                    <p>LANGUAGES</p>
                  </div>
                    <ul class="ul-second-col">
                      <li>Html/CSS/SCSS</li>
                      <li>SQL</li>
                      <li>Javascript/JSON/React</li>
                      <li>PHP</li>
                      <li>Elixir</li>
                      <li>C#</li>
                    </ul>
                    <div id='heading-one'>
                      <p>FRAMEWORKS/SOFTWARE</p>
                    </div>
                    <ul class="ul-second-col">
                      <li>Bootstrap</li>
                      <li>AWS Services</li>
                      <li>Vue.js</li>
                      <li>TDD/Unit Testing</li>
                      <li>Visual Studio/Code</li>
                      <li>GitHub</li>
                      <li>Slack</li>
                      <li>Agile/Scrum</li>
                      <li>Microsoft Office Suite</li>
                      <li>Google Apps</li>
                    </ul>
                    <div id='heading-one'>
                      <p>HIGHLIGHTS</p>
                    </div>
                    <ul class="ul-second-col">
                      <li><b>MS150 –– Top 40 Fundraiser</b></li>
                      <li>150 mile bicycle ride supporting victims of Multiple Sclerosis</li>
                      <li><b>Color Run –– Annual Entrant</b></li>
                      <li>5k race each year to support the community</li>
                      <li><b>Run for Rangers –– Entrant</b></li>
                      <li>5k race each year to support The United States Military</li>
                      <li><b>Red Ribbon Ride –– Entrant</b></li>
                      <li>12 mile bicycle ride supporting victims of HIV/AIDS</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  <img class= "resumephoto" src={Photo} alt="Resume" />
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Resume;
