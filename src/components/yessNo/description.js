import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

function Desc() {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 2000},
  });
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.span className='subsectDiv grid-desc' style={fade}>
          <p className='yessNoDesc'>YessNo is a yes or no voting application. It offers both public and private votes. Public votes are open to all YessNo members
          to voice their opinions on. Private votes are for smaller groups of people. Each vote member will receive an SMS message and email with
          a unique link to the vote.</p>
      </a.span>
    </VisibilitySensor>
  )
}
 export default Desc;
