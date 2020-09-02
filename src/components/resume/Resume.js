import React, { Component } from 'react';
import './Resume.scss';

class Resume extends Component {
  render() {
    return (
      <div class='page-wrapper'>
          <div class='row'>
            <div class='column'>
              <div class="left-column">
                <div id='title'>
                  <ul id='header'><b>Autumn Farris</b></ul>
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
                <div id='experience'>
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
                </div>
                <div id='education'>
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
                </div>
                  <div id='heading-three'>
                    <ul>2015 - 2017</ul>
                  </div>
                  <div id='content'>
                    <ul>Major GPA 4.0/4.0</ul>
                    <ul><b>Dean's List of Scholastic Achievement (2015 - 2017) –– Honoree</b></ul>
                  </div>
              </div>
            </div>
            <div class='column'>
              <div class='right-column'>
                <div id='contact'>
                  <ul id='phone-number'>+1 (417) 350-2445</ul>
                  <ul id='email'><a href="" class="active">autumn@autumnfarris.com</a></ul>
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
                  <div id='Frameworks/Software'>
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
                  </div>
                  <div id='Highlights'>
                    <div id='heading-one'>
                      <ul>HIGHLIGHTS</ul>
                    </div>
                      <div id='content'>
                        <ul><b>MS150 –– Top 40 Fundraiser</b></ul>
                        <ul>150 mile bicycle ride supporting victims of Multiple Sclerosis</ul>
                        <ul><b>Color Run –– Annual Entrant</b></ul>
                        <ul>5k race each year to support the community</ul>
                        <ul><b>Run for Rangers –– Entrant</b></ul>
                        <ul>5k race each year to support The United States Military </ul>
                      </div>
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
