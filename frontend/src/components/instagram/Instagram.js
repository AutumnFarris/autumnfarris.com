import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './Instagram.scss';

const Instagram = () => {
    return (
      <div class="div-wrapper">
        <InstagramEmbed
          url='https://www.instagram.com/p/BXZS6viBIIs/?utm_source=ig_embed&amp;utm_campaign=loading'
          maxWidth={375}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    );
}

export default Instagram;
