import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

function Desc() {
  const [vis, setVis] = useState(false);
  const fade = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 1000},
  });
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.div className='yessNoDesc' style={fade}>
          <a href='https://yessno.co' className='yessNoLink'>YessNo.Co</a>
          <p className='grid-desc'>YessNo is a yes or no voting application. It offers both public and private votes. Public votes are open to all YessNo members
          to voice their opinions on. Private votes are for smaller groups of people. Each vote member will receive an SMS message and email with
          a unique link to the vote. Technical deep dive below.</p>
      </a.div>
    </VisibilitySensor>
  )
}
 export default Desc;
