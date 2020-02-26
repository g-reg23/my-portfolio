import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

function FolioDesc() {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    margin:'10%',
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 1000},
  });
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.span style={fade}>
        <p className='projectTitle'>gstauf.tech</p>
        <p className='infoBlurb'>gstauf.tech is the site you are on right now. I built this site from scratch to show to those interested in my ability,
        and to continue learning. I have learned the React hooks API, CSS transitions and animations, and react-spring coupled with
        react-visibility-sensor for scroll-into-view transitions. React-spring is very nice to be able to work with transitions and animations
        in javascript, but I do recommend some knowledge of CSS (transition, animation, transform to name a few) as well,
        as they compliment each other well. I really like the react-spring library and plan to continue working with it and building
        more complex animations. I did not use any CSS frameworks, I wanted to work on my understanding and ability with CSS. This site was
        deployed using a one-click pipeline with Netlify. </p>
       </a.span>
    </VisibilitySensor>
  )
}
 export default FolioDesc;
