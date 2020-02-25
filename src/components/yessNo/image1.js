import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import yessNoFull from '../images/yessno-full-page.png';

function Image1() {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 2000},
  });
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.a href='https://yessno.tk' target='_blank' style={fade}><img src={yessNoFull} className='yessnoImages image1' alt='yessno-image' /></a.a>
    </VisibilitySensor>
  )
}

export default Image1
