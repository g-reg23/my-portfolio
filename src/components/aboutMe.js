import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";

function AboutMe() {
  const [vis, setVis] = useState(false);
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 2000},
  })
  const grow = useSpring({
    transform: vis ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
    from: {transform:'scaleX(0) scaleY(0)'},
    config: {duration: 2000},
  });
  const pStyle = {
    color: 'cadetblue',
  }
  return(
    <div id='about' style={{marginTop:'25%'}}>
      <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:250}}>
        <a.div className='aboutDiv' style={backgroundAnim}>
          <a.div className='aboutSubDiv' style={grow}>
            <p className='aboutSubtitle'>About Me:</p>
            <p className='aboutText'>Hey I'm Greg, I'm a self taught web developer with a passion for learning about the web, programming, and all things tech.
            One day years ago I started an amazing show called Mr. Robot, I loved it, but realized I had no idea what they were talking about when it got technical.
            Thus began my odyssey into programming, I have loved it and will never stop learning new techologies and improving my abilities.
            My current preferred stack is the MERN (MongoDB, Express, React, Node) stack; throw in some Redux and we've got a party! :)
            I consider myself a full-stack developer, but am happy to specialize on either side. I'm a big fan of Javascipt and React, but
            am always open to different technologies, and I'm a fast learner. So, contact me if you are interested in collaboration or hiring me.
            </p>
            <p className='aboutSubtitle'>Future Interests:</p>
            <p className='aboutText'>Understanding javascript at a deeper level. I am also very interested in mobile development both native development,
            and cross-platform development with React Native or Flutter, etc. I am Currently learning java and building an Android app for the private vote functionality of YessNo.co, with an IOS app to follow.
            Other interests include blockchain, serverless architecture, GraphQL, machine learning, among many other things.
            </p>
            <p className='aboutSubtitle'>Personal:</p>
            <p className='aboutText'>I'm a part time wrestling coach. I've been a high school coach for over 5 years. I am also now working with a club program
            5th grade through 12th grade. I love it and it is a large part of my life. To me programming mirrors wrestling in that both require the same hard work, commitment,
            and fearlessness in order to succeed. With over 15 years in the service industry I have developed great customer facing and social skills.
            I am able to understand, and anticipate sentiment and react accordingly not only taking care of their expectations, but exceeding them. I'm a bike commuter and you will catch me riding my fixie 12 months a year.
            </p>
            <p className='aboutSubtitle'>Email:</p>
            <Popup trigger={<a className='email' href='mailto:gstaufferdev@gmail.com?Subject=Portfolio%20Contact' target='_top'>gstaufferdev@gmail.com</a>} position='bottom center' on='hover'>
              <p style={pStyle}>Click to open default email application.</p>
            </Popup>
          </a.div>
        </a.div>
      </VisibilitySensor>
    </div>
  );
}

export default AboutMe;
