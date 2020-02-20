import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import yessNoFull from './images/yessno-full-page.png';
import activeFull from './images/active-full.png';

function Projects() {
  return(
    <div id='projects' className='projectDiv'>
      <p className='projectHeader'>My Projects</p>
      <a href='https://yessno.tk' target='_blank' className='yessnoLinkTitle'>YessNo.tk</a>
      <div className='ssDiv'>
        <a href='https://yessno.tk' className='yessnoImages' target='_blank'><img src={yessNoFull} alt='yessno-image' width='150' height='300' /></a>
        <p className='yessNoDesc'>YessNo is a yes or no voting application. It offers both public and private votes. Public votes are open to all YessNo members
        to voice their opinions on. Private votes are for smaller groups of people. Each vote member will receive an SMS message and email with
        a unique link to the vote.</p>
        <a href='https://yessno.tk' className='yessnoImages' target='_blank'><img src={activeFull} alt='yessno-image2' width='150' height='300' /></a>
      </div>
    </div>
  )
}

export default Projects;
