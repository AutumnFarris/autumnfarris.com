import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const home = () => {
    return (
       <div>
          <h1>Home</h1>
           <p>Home page</p>
           <InstagramEmbed
             url='https://instagr.am/p/Zw9o4/'
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

export default home;
