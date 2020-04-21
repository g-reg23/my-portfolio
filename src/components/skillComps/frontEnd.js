import React, { useState } from 'react';
import ReduxSvg from '../svg/reduxSvg';
import JSSvg from '../svg/jSSvg';
import ReactSvg from '../svg/reactSvg';
import HtmlSvg from '../svg/htmlSvg';
import CssSvg from '../svg/cssSvg';

const Frontend = () => {
  const [frontIndex, setFront] = useState(0);
  const frontEnd = ['Click an icon to read about that skill. To change the overall skill type, click a different skill group at the top.',
  'Javascript is a client side scripting language for the web browser. Javascript is my language of choice. I have been writing javascript for over 2 years now. I have a strong basis in vanilla js, in my first app I used only vanilla js and managed to develop my own per page state management using vanilla js, closures, and prototypal inheritance. Currently I am working with React, but always love the oppurtunity to code vanilla js. I am always interested in learning more about javascript and am continuously reading and studying it, in order to increase my understanding.',
  'React is a javascript framework to help build user interfaces in single page applications. I have over 1 year experience working with React and the React ecosystem. As I have mentioned above, I recently learned the hooks API. My largest application (YessNo.co) was written using class components, but I am transistioning to hooks and functional components, love the simplicity of useState(). Among some of the many great react libraries I am familiar with are react-router, react-spring, react-strap, trophy, and react-visibility-sensor',
  'Redux is a state management library. Redux with React creates a one way data flow, which gives you greater control, and can help to reduce issues in your applications. While the initial boilerplate setup of redux can be tedious and somewhat confusing, once I fully understood it, I have really appreciated the ability to use a single immutable store. I look forward to future projects and learning more redux patterns',
  'HTML is markup language for web browsers. I am experienced in writing clean, accessible HTML markup. HTML is the backbone of the web. In my first web app I built an interactive calendar using HTML tables and vanilla javascript, it really gave me a greater understanding of both HTML and javascript and also how well they can work together.',
  'CSS describes how HTML elements are to be presented in the web browser. I have experience with CSS frameworks and libraries like Bootstrap and MaterialUI. I also have experience using only CSS methods, including CSS grid, flexbox, transform, animation with keyframes, and transition. Experienced using media queries to build responsive websites. I feel I have a very strong foundation in CSS, and am constantly striving to improve my design skills.']
  return (
    <div>
      <p className='skillTypeTitle'>Front-end Skills</p>
      <div className='skillsListItem'>
          <button className='svgButton' onClick={() => setFront(4)}><HtmlSvg /></button>
          <button className='svgButton' onClick={() => setFront(5)}><CssSvg /></button>
          <button className='svgButton' onClick={() => setFront(1)}><JSSvg /></button>
          <button className='svgButton' onClick={() => setFront(2)}><ReactSvg /></button>
          <button className='svgButton' onClick={() => setFront(3)}><ReduxSvg /></button>
      </div>
      <p className='skillsDesc'>{frontEnd[frontIndex]}</p>
    </div>

  );
};

export default Frontend;
