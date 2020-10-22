import React, {useState} from 'react';
import SpecVid from './video';
import VisibilitySensor from 'react-visibility-sensor';
import {useSpring, animated as a} from 'react-spring';
import SpecDesc from './specDesc';

const Spectre = () => {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 1000},
  });
  return(
    <VisibilitySensor partialVisibility onChange={(isVisible) => setVis(isVisible)}>
      <a.div style={fade}>
        <div className='xampContainer'>
          <SpecVid />
          <SpecDesc />
        </div>
      </a.div>
    </VisibilitySensor>
  )
}

export default Spectre;
