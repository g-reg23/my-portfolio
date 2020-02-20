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
  'Javascript is a client side scripting language for the web browser. Javascript is my language of choice. I am very experienced with writing vanilla javasript, to JQuery, to JSX. ',
  'React is a javascript framework to help build user interfaces in single page applications. I have over 1 year experience working with React and the React ecosystem. Well versed in both class based and functional components, I currently have learned the hooks API. Among some of the many great react libraries I am familiar with are react-router, react-spring, react-strap, trophy,and react-visibility-sensor',
  'Redux is a state management library. Redux with React creates a one way data flow, which gives you greater control, and can help to reduce issues in your applications. I have been working with Redux for nearly 1 year.',
  'HTML is markup language for web browsers. I am experienced in writing clean, accessible HTML markup. HTML is the backbone of the web. I also am well-versed in JSX.',
  'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be presented in the web browser. I am experienced working with CSS styling, transitions, and animations. Very familiar with bootstrap and react-strap.  Some familiarity with CSS pre-processors LESS and SASS.']
  const backend = ['Click an icon read about that skill.',
  'Express.js is a modular web framework for Node.js. Experienced writing differnt express middlewares, including routing, API endpoints and custom middleware.',
  'Node.js is a server environment, it enables you to use JavaScript on the server. I have over 1 year experience working with Node and Javascript on the backend.',
  'Flask is a micro web framework written in Python. As a micro framework, Flask provides lots of flexibility.  Experienced using Flask to bring my Python skills to web development.',
  'Python is a general purpose programming language. Python can be used for many things including web development, machine learning, and data science. I have experience using Python to build web apps. Python is one of my first languages (right after C), I have taken multiple online Python courses, therefore I have some foundation in data science as well.']

  const database = ['Click an icon to read about that skill.',
  'MySql is a relational database management system that uses the SQL query language (Structured Query Language). I am experienced in building and querying normalized, relational MySQL databases. I also have experience with SQLAlchemy ORM, which is an Object Relational Mapper for SQL databases in Python',
  'MongoDB is a document database, it is considered to be NoSQL, meaning it does not use relational database techniques. MongoDB stores data in JSON-like objects, it provides great flexibility as your app grows. I have experience using MongoDB as well as Mongoose ODM (Object Data Modeling) Library. Mongoose ODM is essentially a framework for MongoDB.']
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
