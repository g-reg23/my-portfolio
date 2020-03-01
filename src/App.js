import React, { useState } from 'react';
import {useSpring, animated as a, config} from 'react-spring';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Projects from './components/projects';
import logo from './logo.svg';
import './App.css';

// Top level component.

function App() {
  return (
    <div className='App' >
      <div className='nav'><a href='#skills' className='navLinks'>Skills</a><a href='#projects' className='navLinks'>Projects</a><a href='#about' className='navLinks'>About Me</a></div>
      <Header />
      <div id='skills'></div>
      <Skills />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
