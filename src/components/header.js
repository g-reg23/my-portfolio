import React from 'react';
import {useSpring, animated as a} from 'react-spring';

const Header = () =>  {
  const title = useSpring({
    opacity:1,
    from: {opacity:0},
    config:{duration:1000},
  })
  const desc = useSpring({
    opacity:1,
    from: {opacity:0},
    config:{duration:1000},
    marginTop:'10%',
    delay: 3000,
  })
  return(
      <a.div className='topDiv'>
        <a.div className='header-div'>
          <a.p className='alice-text title' style={title}>Greg Stauffer</a.p>
          <a.p className='alice-text subTitle'>Full Stack Developer</a.p>
          <a.p className='alice-text desc' style={desc}>Hey I'm Greg, I'm a full stack web and mobile developer. I love coding and learning about the web.
          This site was built from scratch to continue working on my frontend skills. Scroll down to view more about me. Feel free to contact me anytime.</a.p>
        </a.div>
        <a.div className='buttonDiv' style={desc}>
          <a className='topButtons button1' href='https://docs.google.com/document/d/1xBBaXE6z5XrrCUDafygd0G-ziBgV22prIvgx1Umqufc/edit?usp=sharing' rel="noopener noreferrer" target='_blank'>My Resume</a>
          <a className='topButtons button2' href='mailto:gstaufferdev@gmail.com?Subject=Portfolio%20Contact' target='_top'>Contact Me</a>
          <a className='topButtons button3' href='https://github.com/g-reg23' rel="noopener noreferrer" target='_blank'>My GitHub</a>

        </a.div>
      </a.div>
  )
}
export default Header
