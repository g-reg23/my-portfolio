import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row, Col } from 'reactstrap';
import yessNoFull from './images/yessno-full-page.png';
import activeFull from './images/active-full.png';

function Projects() {
  const [vis, setVis] = useState(false);
  const [firstVis, setFirstVis] = useState(false);
  const [image1Vis, setImage1Vis] = useState(false);
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    // transform: vis ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
    from: {opacity:0},
    config: {duration: 3000},
  })
  const firstFade = useSpring({
    opacity: firstVis ? 0 : 1,
    from: {opacity:0},
    config: {duration: 2000},
  });

  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:300}}>
      <a.div id='projects' className='projectDiv' style={backgroundAnim}>
        <p className='projectHeader'>My Projects</p>
        <a href='https://yessno.tk' target='_blank' className='yessnoLinkTitle'>YessNo.tk</a>
        <div className='ssDiv'>
          <a.a href='https://yessno.tk' target='_blank'><img src={yessNoFull} className='yessnoImages image1' alt='yessno-image' /></a.a>
          <a.span className='subsectDiv grid-desc' style={firstFade}>
              <p className='yessNoDesc'>YessNo is a yes or no voting application. It offers both public and private votes. Public votes are open to all YessNo members
              to voice their opinions on. Private votes are for smaller groups of people. Each vote member will receive an SMS message and email with
              a unique link to the vote.</p>
          </a.span>
          <a.a href='https://yessno.tk' target='_blank'><img src={activeFull} className='yessnoImages image2' alt='yessno-image2' /></a.a>
        </div>
      </a.div>
    </VisibilitySensor>
  )
}

export default Projects;
