import React, { Component } from 'react';
import './Resume.scss';
import Photo from './resume_photo.jpeg';

class Resume extends Component {
  render() {
    return (
      <div class='page-wrapper'>
        <div class='row'>
          <div class='row-style'>
            <div class='main-column'>
              <div id='title'>
                <ul id='resume-header'><b>Autumn Farris</b></ul>
                <ul id='subheader'><i>Programmer, Web developer, Communicator!</i></ul>
              </div>
            <div id='summary'>
              <div id='heading-one'>
                <ul>SUMMARY</ul>
              </div>
              <div id='content'>
                <ul>Ambitious clean code developer who thrives on expanding
                knowledge and skillsets in both the professional and personal
                fields.</ul>
              </div>
            </div>
              <div id='heading-one'>
                <ul>EXPERIENCE</ul>
              </div>
              <div id='heading-two'>
                <ul><b>Glasswerks</b>, L.A., CA –– <i>Programmer</i></ul>
              </div>
              <div id='heading-three'>
                <ul>November 2018 - May 2019</ul>
              </div>
              <div id='content'>
                <ul>Helped develop and deploy customer order tracking web app.</ul>
                <ul>Implemented Elixir and TDD skills to test and deploy back end logic.</ul>
                <ul><b>Created portal used daily (2019) –– Programmer</b></ul>
              </div>
              <br />
              <div id='heading-two'>
                <ul><b>Common Ledger</b>, Wellington, New Zealand –– <i>Intern</i></ul>
              </div>
              <div id='heading-three'>
                <ul>June 2018 - August 2018</ul>
              </div>
              <div id='content'>
                <ul>Assisted in developing and deploying an accounting application.</ul>
                <ul>Worked closely with developers to manage complex projects.</ul>
                <ul>Performed in a full stack platform environment using Vue.js, AWS services,
                    TDD/Unit Testing, Terraform, as well as GitHub, Slack, and Scrum practices.</ul>
                <ul><b>Participated in daily Scrum events (2018) –– Scrum Master</b></ul>
              </div>
              <div id='heading-one'>
                <ul>EDUCATION</ul>
              </div>
              <div id='heading-two'>
                <ul><b>Missouri State University</b> –– <i>Computer Information Systems, B.S.</i></ul>
              </div>
              <div id='heading-three'>
                <ul>2017 - 2018</ul>
              </div>
              <div id='content'>
                <ul>Major GPA 3.8/4.0</ul>
                <ul><b>Association of Information Technology Professionals –– Member</b></ul>
                <ul><b>Dean's List of Scholastic Achievement (2017 - 2018) –– Honoree</b></ul>
              </div>
              <br />
              <div id ='heading-two'>
                <ul><b>Missouri State University</b> –– <i>Communication, B.S.</i></ul>
              </div>
              <div id='heading-three'>
                <ul>2015 - 2017</ul>
              </div>
              <div id='content'>
                <ul>Major GPA 4.0/4.0</ul>
                <ul><b>Dean's List of Scholastic Achievement (2015 - 2017) –– Honoree</b></ul>
              </div>
              <div id='heading-one'>
                <ul>ADDITIONAL EXPERIENCE</ul>
              </div>
              <div id='heading-two'>
                <ul><b>Bair's Sports Grill</b>, Springfield, MO –– <i>Shift Leader</i></ul>
              </div>
              <div id='heading-three'>
                <ul>June 2013 - May 2018</ul>
              </div>
              <div id='content'>
                <ul>Bartending and product promotion</ul>
                <ul>Employee management</ul>
                <ul>Created new bar beverage to support World Autism Awareness Day</ul>
                <ul><b>Sold $2,500 in gift cards (2016) –– Contest Winner</b></ul>
                <ul><b>Employee Of The Month (2015) –– Recipient</b></ul>
              </div>
              <br />
              <div id='heading-two'>
                <ul><b>Big Brothers Big Sisters</b>, Springfield, MO –– <i>Intern</i></ul>
              </div>
              <div id='heading-three'>
                <ul>January 2017 - July 2017</ul>
              </div>
              <div id='content'>
                <ul>Donor outreach and new lead acquisition</ul>
                <ul>Update company website</ul>
                <ul><b>Raised $13,000 for silent auction (2017) –– Surpassed goal by $10,000</b></ul>
              </div>
            </div>
              <div class='second-column'>
                <div id='contact'>
                  <ul id='phone-number'>+1 (417) 350-2445</ul>
                  <br />
                  <ul id='email'><a href = "mailto: autumn@autumnfarris.com">autumn@autumnfarris.com</a></ul>
                  <br />
                  <ul id='linkedin'>linkedin.com/in/​autumnfarris</ul>
                </div>
                <div id='Languages'>
                  <div id='heading-one'>
                    <ul>LANGUAGES</ul>
                  </div>
                  <div id='content'>
                    <ul>Html/CSS/SCSS</ul>
                    <ul>SQL</ul>
                    <ul>Javascript/JSON/React</ul>
                    <ul>PHP</ul>
                    <ul>Elixir</ul>
                    <ul>C#</ul>
                  </div>
                    <div id='heading-one'>
                      <ul>FRAMEWORKS/SOFTWARE</ul>
                    </div>
                      <div id='content'>
                        <ul>AWS Services</ul>
                        <ul>Vue.js</ul>
                        <ul>TDD/Unit Testing</ul>
                        <ul>Visual Studio/Code</ul>
                        <ul>GitHub</ul>
                        <ul>Slack</ul>
                        <ul>Agile/Scrum</ul>
                        <ul>Microsoft Office Suite</ul>
                        <ul>Google Apps</ul>
                      </div>
                    <div id='heading-one'>
                      <ul>HIGHLIGHTS</ul>
                    </div>
                      <div id='content'>
                        <ul><b>MS150 –– Top 40 Fundraiser</b></ul>
                        <ul>150 mile bicycle ride supporting victims of Multiple Sclerosis</ul>
                        <ul><b>Color Run –– Annual Entrant</b></ul>
                        <ul>5k race each year to support the community</ul>
                        <ul><b>Run for Rangers –– Entrant</b></ul>
                        <ul>5k race each year to support The United States Military</ul>
                        <ul><b>Red Ribbon Ride –– Entrant</b></ul>
                        <ul>12 mile bicycle ride supporting victims of HIV/AIDS</ul>
                      </div>
                    <br />
                    <div id='resume-photo'>
                      <img src={Photo} alt="Resume" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Resume;
