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
      <a.div className='innerDiv ynDiv' style={fade}>
         <div className='titleDiv'>
           <p className='innerTitle'>YessNo.co</p>
           <p className='innerSubtitle'>Yes No Voting Application</p>
           <a href='https://yesso.co' target='_blank' className='gitHubLink' rel="noopener noreferrer">Visit Site</a>
        </div>
        <div className='infoDiv'>
          <span className='subHeading'>Description</span>
          <p className='techDescription'>YessNo is a yes or no voting application. It offers both public and private votes. Public votes are open to all YessNo members
            to voice their opinions on. Private votes are for smaller groups of people. Each vote member will receive an SMS message and email with
            a unique link to the vote. Technical deep dive below.
          </p>
        </div>
      </a.div>
    </VisibilitySensor>
  )
}
 export default Desc;
