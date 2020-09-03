import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return (
      <div>
        <InstagramEmbed
          url='https://www.instagram.com/p/CDy_BYnDkJd/?utm_source=ig_embed&amp;utm_campaign=loading'
          maxWidth={320}
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
