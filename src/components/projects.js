import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row, Col } from 'reactstrap';
import Desc from './yessNo/description';
import Image1 from './yessNo/image1';
import Image2 from './yessNo/image2';
import FolioDesc from './folio/folioDesc';

function Projects() {
  const [vis, setVis] = useState(false);
  const [firstVis, setFirstVis] = useState(false);
  const [image1Vis, setImage1Vis] = useState(false);
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    // transform: vis ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
    from: {opacity:0},
    config: {duration: 1500},
  })

  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:300}}>
      <a.div id='projects' className='projectDiv' style={backgroundAnim}>
        <p className='projectHeader'>My Projects</p>
        <section>
          <a href='https://yessno.tk' target='_blank' className='projectTitle'>YessNo.tk</a>
          <div className='ssDiv'>
            <Image1 />
            <Desc />
            <Image2 />
          </div>
        </section>
        <section className='folioSect'>
          <FolioDesc />
        </section>
        <section>
        </section>
      </a.div>
    </VisibilitySensor>
  )
}

export default Projects;
