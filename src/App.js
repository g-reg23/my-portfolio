import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import Programmer from './components/programmer';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Projects from './components/projects'
import logo from './logo.svg';
import './App.css';
// import VisibilitySensor from 'react-visibility-sensor';


function App() {
  const props = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {duration:4000},
  })
  const background = useSpring({
    // opacity:1,
    borderRadius:0,
    from:{borderRadius:'100%'},
    config:{duration:4000}
  })
  const title = useSpring({
    opacity:1,
    from: {opacity:0},
    config:{duration:3000},
    delay:5000,
  })
  const desc = useSpring({
    opacity:1,
    from: {opacity:0},
    config:{duration:3000},
    marginTop:'10%',
    delay: 7000,
  })
  return (
    <div className='App' >
      <div className='nav'><a href='#skills' className='navLinks'>Skills</a><a href='#projects' className='navLinks'>Projects</a><a href='#about' className='navLinks'>About Me</a></div>
      <a.div className='topDiv'>
        <a.div className='header-div'>
          <a.p className='alice-text title' style={title}>Greg Stauffer</a.p>
          <a.p className='alice-text subTitle'>Full Stack Web Developer</a.p>
          <a.p className='alice-text desc' style={desc}>Hey I'm Greg, I'm a full stack web developer. I love coding and learning about the web.
          This site was built from scratch to learn react hooks and work on CSS and JS animations. So stay awhile, let me know what you think in the contact section.</a.p>
        </a.div>
        <a.div className='buttonDiv' style={desc}>
          <a className='topButtons' href='https://docs.google.com/document/d/1nuFqDiiCthMo-okmsf1ZJ6XZKc1f9xfsWaP5oU2oO0Y/edit?usp=sharing' target='_blank'>My Resume</a>
        </a.div>
      </a.div>
      <div id='skills'></div>
      <Skills />
      <p className='color-2'>All icons, excluding Flask and MySQL,  by </p><a style={{color:'blue'}} target="_blank" href="https://icons8.com">Icons8</a>
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
