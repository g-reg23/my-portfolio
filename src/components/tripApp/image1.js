import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import TripLanding from '../images/trip-landing.png';

const TripImage1 = () => {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    transform: vis ? 'rotateY(0)' : 'rotateY(180deg)',
    from: {transform:'rotateY(180deg)'},
    config: {duration: 1000},
  });
  const pStyle = {
    color: 'cadetblue',
  }
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.a href='https://github.com/g-reg23/trip-app' target='_blank' style={fade}>
        <Popup trigger={<img src={TripLanding} className='yessnoImages image1' alt='yessno-image'/>} position='top center' on='hover'>
          <p style={pStyle}>Click image to view code at GitHub</p>
        </Popup>
      </a.a>
    </VisibilitySensor>
  )
}

export default TripImage1;
