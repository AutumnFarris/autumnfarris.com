import React from "react";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Footer.scss';

function Footer () {
  return (
    <div class="social-media">
      <ul>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="mailto: autumn@autumnfarris.com" size="50" /></li>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="https://github.com/autumnfarris" size="50" /></li>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/autumnfarris/" size="50" /></li>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/autumnlfarris/" size="50" /></li>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/autumn.farris.35" size="50" /></li>
        <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="pinterest" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(177,174,150,1)" iconSize="5" roundness="50%" url="https://www.pinterest.com/autumn1618/_saved/" size="50" /></li>
      </ul>
    </div>
  );
}

export default Footer;
