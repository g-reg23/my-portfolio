import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import activeFull from '../images/active-full.png';

function Image2() {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    transform: vis ? 'rotateY(0)' : 'rotateY(-180deg)',
    from: {transform:'rotateY(-180deg)'},
    config: {duration: 1000},
  });
  const pStyle = {
    color: 'cadetblue'
  }
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.a href='https://yessno.tk' target='_blank' style={fade} id='techButtonScroll'>
        <Popup trigger={<img src={activeFull} className='yessnoImages image2' alt='yessno-image2' />} position='top center' on='hover'>
          <p style={pStyle}>Click image to go to site</p>
        </Popup>
      </a.a>
    </VisibilitySensor>
  )
}

export default Image2
