import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import TripLanding from '../images/trip-landing.png';

const TripImage1 = () => {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 1500},
  });
  const pStyle = {
    color: 'cadetblue',
  }
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.a href='https://github.com/g-reg23/trip-app' target='_blank' style={fade}>
        <Popup trigger={<img src={TripLanding} alt='yessno-landing-page' className='tripImage'/>} position='top center' on='hover'>
          <p style={pStyle}>Click image to view code at GitHub</p>
        </Popup>
      </a.a>
    </VisibilitySensor>
  )
}

export default TripImage1;
