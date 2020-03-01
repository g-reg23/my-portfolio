import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import yessNoFull from '../images/yessno-full1.png';

function Image1() {
  const [vis, setVis] = useState(false);
  const spin = useSpring({
    transform: vis ? 'rotateY(0)' : 'rotateY(180deg)',
    from: {transform:'rotateY(180deg)'},
    config: {duration: 1000},
  });
  const pStyle = {
    color: 'cadetblue',
  }
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.a href='https://yessno.tk' target='_blank' style={spin} className='imageLink imageLink1'>
        <Popup trigger={<img src={yessNoFull} className='yessnoImages image1' alt='yessno-landing-page' />} position='top center' on='hover'>
          <p style={pStyle}>Click image go to site</p>
        </Popup>
      </a.a>
    </VisibilitySensor>
  )
}

export default Image1
