import React, {useState} from "react";
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import SkillsSvg from './svg/skillsSvg';
import ReduxSvg from './svg/reduxSvg';
import JSSvg from './svg/jSSvg';
import ReactSvg from './svg/reactSvg';
import MongoSvg from './svg/mongoSvg';
import HtmlSvg from './svg/htmlSvg';
import CssSvg from './svg/cssSvg';
import ExpressSvg from './svg/expressSvg';
import NodeSvg from './svg/nodeSvg';
import FlaskSvg from './svg/flaskSvg';
import PythonSvg from './svg/pythonSvg';
import MysqlSvg from './svg/mysqlSvg';

function Skills() {
  const [vis, setVis] = useState(false);
  const [show, setShow] = useState(false);
  const frontEnd = ['Click an icon to read about that skill.',
  'Javascript is a client side scripting language for the web browser. Javascript is my language of choice. I have been writing javascript for over 2 years now. I have a strong basis in vanilla js, in my first app I used only vanilla js and managed to develop my own per page state management using vanilla js, closures, and prototypal inheritance. Currently I am working with React, but always love the oppurtunity to code vanilla js. Anybody wanna build a framework? Email me, lets collab!',
  'React is a javascript framework to help build user interfaces in single page applications. I have over 1 year experience working with React and the React ecosystem. As I have mentioned above, I recently learned the hooks API. My largest application (YessNo.tk) was written using class components, but I am transistioning to hooks and functional components, love the simplicity of useState(). Among some of the many great react libraries I am familiar with are react-router, react-spring, react-strap, trophy, and react-visibility-sensor',
  'Redux is a state management library. Redux with React creates a one way data flow, which gives you greater control, and can help to reduce issues in your applications. While the initial boilerplate setup of redux can be tedious and somewhat confusing, once I fully understood it, I have really appreciated the ability to use a single immutable store. I look forward to future projects and learning more redux patterns',
  'HTML is markup language for web browsers. I am experienced in writing clean, accessible HTML markup. HTML is the backbone of the web. In my first web app I built an interactive calendar using HTML tables and vanilla javascript, it really gave me a greater understanding of both HTML and javascript and also how well they can work together.',
  'CSS describes how HTML elements are to be presented in the web browser. While I have experience working with CSS frameworks like bootstrap and MaterialUI, I do a good amount of my styling with pure css. I like to use whatever tool is best for the job. I am very familiar with flexbox, bootstrap and react-grid grid systems, css animation and transition, keyframes, and the css transform property among much more.']
  const backend = ['Click an icon read about that skill.',
  'Express.js is a modular web framework for Node. While building YessNo.tk I have utilized Express very much. Express works well with my node server, I have implemented all restAPI endpoints using express router. I have used other express middlewares such as express-validator for data validation, as well as created custom middleware for authorizing JWT tokens.',
  'Node.js is a server environment, it enables you to use JavaScript on the server. I have over 1 year experience working with Node and Javascript on the backend. Node coupled with Express has helped me build a nice stateless restAPI backend for YessNo.tk. I am also well versed in working with NPM.',
  'Flask is a micro web framework written in Python. As a micro framework, Flask provided me with great flexibilty to use what packages and libraries I needed. I implemented form validation using flask-wtf, data modeling for MySQL using SQLAlchemy, flask_socketio for chat and flask_login for simple sessions.',
  'Python is a general purpose programming language. Python can be used for many things including web development, machine learning, and data science. I have experience using Python to build web apps. Python is one of my first languages (right after C), I have taken multiple online Python courses, therefore I have some foundation in data science as well.']

  const database = ['Click an icon to read about that skill.',
  'MySql is a relational database management system that uses the SQL query language (Structured Query Language). I am experienced in building and querying normalized, relational MySQL databases with raw SQL and SQLAlchemy ORM. Working with MySQL and python has given me a greater understanding of normalized, relational databases which works well alongside object oriented python.',
  'MongoDB is a NoSQL database system which stores data in a JSON-like form. MongoDB and Mongoose ODM were the perfect choice for building YessNo.tk, my yes/no voting app. Dealing with JSON objects makes it a perfect fit for working with node and Express on the back-end, and react and javascript on the front-end. MongoDB gave me the ability to continuously develop more complex models for votes and voters throughout development based on its flexibility and ability to add objects into collections.']
  const [backIndex, setBack] = useState(0)
  const [frontIndex, setFront] = useState(0);
  const [dataIndex, setDB] = useState(0);
  const [typeIndex, setType] = useState(0);
  const style = useSpring({
    transform: vis ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
    opacity: vis ? 1 : 0,
    from: {opacity: 0, transform:'scaleX(0) scaleY(0)'},
    config: {duration: 3000},
    padding: '1%',
  });
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 2000},
  })
  const desc = useSpring({
    opacity:1,
    from: {opacity:0},
    config:{duration: 2000}
  })
  function reset() {
    setBack(0);
    setFront(0);
    setDB(0);
  }
  function setTypeFront() {
    setType(0);
    reset();
  }
  function setTypeBack() {
    setType(1);
    reset();
  }
  function setTypeDB() {
    setType(2);
    reset();
  }

  return(
    <div>
      <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:300}}>
        <div>
          <a.div style={backgroundAnim} className='skillsDiv'>
             <a.div style={style}>
                <div className='typeDiv'>
                  <button className='skillType' onClick={setTypeFront}>Front-End</button>
                  <button className='skillType' onClick={setTypeBack}>Back-End</button>
                  <button className='skillType' onClick={setTypeDB}>Database</button>
                </div>
                {typeIndex === 0 ?
                  <div>
                    <p className='skillTypeTitle'>Front-end Skills</p>
                    <a.div className='skillsListItem'>
                      <button className='svgButton' onClick={() => setFront(4)}><HtmlSvg /></button>
                      <button className='svgButton' onClick={() => setFront(5)}><CssSvg /></button>
                      <button className='svgButton' onClick={() => setFront(1)}><JSSvg /></button>
                      <button className='svgButton' onClick={() => setFront(2)}><ReactSvg /></button>
                      <button className='svgButton' onClick={() => setFront(3)}><ReduxSvg /></button>
                    </a.div>
                    <p className='skillDesc' style={desc}>{frontEnd[frontIndex]}</p></div> : typeIndex === 2 ?
                    <div>
                      <p className='skillTypeTitle'>Database Skills</p>
                      <a.div className='skillsListItem' style={{margin:'0 15%'}}>
                        <button className='svgButton' onClick={() => setDB(2)}><MongoSvg /></button>
                        <button className='svgButton' onClick={() => setDB(1)}><MysqlSvg /></button>
                      </a.div>
                      <p className='skillDesc' style={desc}>{database[dataIndex]}</p>
                    </div>:
                    <div>
                      <p className='skillTypeTitle'>Back-End Skills</p>
                      <a.div className='skillsListItem'>
                        <button className='svgButton' onClick={() => setBack(2)}><NodeSvg /></button>
                        <button className='svgButton' onClick={() => setBack(1)}><ExpressSvg /></button>
                        <button className='svgButton' onClick={() => setBack(4)}><PythonSvg /></button>
                        <button className='svgButton' onClick={() => setBack(3)}><FlaskSvg /></button>
                      </a.div>
                      <p className='skillDesc'>{backend[backIndex]}</p>
                    </div>
                }
              </a.div>
          </a.div>
        </div>
      </VisibilitySensor>
    </div>
  )
}

export default Skills;
