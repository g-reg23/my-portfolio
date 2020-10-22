import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Desc from './yessNo/description';
import Image1 from './yessNo/image1';
import Image2 from './yessNo/image2';
import FolioDesc from './folio/folioDesc';
import TripDesc from './tripApp/tripDesc';
import TripImage1 from './tripApp/image1';
import DeepDive from './yessNo/deepDive';
import XBImage1 from './xamp/image';
import XBDesc from './xamp/XBDesc';
import Spectre from './spectre/Spectre';

function Projects() {
  const [vis, setVis] = useState(false);
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 1500},
  })

  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:300}}>
      <a.div id='projects' className='projectDiv' style={backgroundAnim}>
        <p className='projectHeader'>My Projects</p>
        <section className='folioSect'>
          <Spectre />
        </section>
        <section className='folioSect'>
          <div className='xampContainer'>
            <XBDesc />
            <XBImage1 />
          </div>
        </section>
        <section className='folioSect'>
          <div className='ssDiv'>
            <Image1 />
            <Desc />
            <Image2 />
          </div>
          <div className='techDiv'>
            <DeepDive />
          </div>
        </section>
        <section className='folioSect'>
          <FolioDesc />
        </section>
        <section className='folioSect'>
          <TripDesc />
          <TripImage1 />
        </section>
      </a.div>
    </VisibilitySensor>
  )
}

export default Projects;
