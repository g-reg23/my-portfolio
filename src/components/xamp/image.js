import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import image from '../images/XAMP Burn.png';

const XBImage1 = () => {
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
    <VisibilitySensor partialVisibility onChange={(isVisible) => setVis(isVisible)}>
      <a.div className='xImageDiv' style={fade}>
        <a href='https://xampburn.com' target='_blank' rel='noopener noreferrer'>
          <Popup trigger={<img src={image} alt='xampburn.com' className='xampImage'/>} position='top center' on='hover'>
            <p style={pStyle}>Click to go to site</p>
          </Popup>
        </a>
      </a.div>
    </VisibilitySensor>
  )
}

export default XBImage1;
