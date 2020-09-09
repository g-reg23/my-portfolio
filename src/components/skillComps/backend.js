import React, { useState } from 'react';
import ExpressSvg from '../svg/expressSvg';
import NodeSvg from '../svg/nodeSvg';
import FlaskSvg from '../svg/flaskSvg';
import PythonSvg from '../svg/pythonSvg';


const Backend = () => {
  const [backIndex, setBack] = useState(0);
  const backend = ['Click an icon read about that skill. To change the overall skill type, click a different skill group at the top.',
  'Express.js is a modular web framework for Node. While building YessNo.co I have utilized Express very much. Express works well with my node server, I have implemented all restAPI endpoints using express router. I have used other express middlewares such as express-validator for data validation, as well as created custom middleware for authorizing JWT tokens.',
  'Node.js is a server environment, it enables you to use JavaScript on the server. I have over 1 year experience working with Node and Javascript on the backend. Node coupled with Express has helped me build a nice stateless restAPI backend for YessNo.co. I am also well versed in working with NPM.',
  'Flask is a micro web framework written in Python. As a micro framework, Flask provided me with great flexibilty to use what packages and libraries I needed. I implemented form validation using flask-wtf, data modeling for MySQL using SQLAlchemy, flask_socketio for chat and flask_login for simple sessions.',
  'Python is a general purpose programming language. I have experience using Python to build web application, namely with Flask. Python is one of my first languages (right after C). Any opportunity I get, I would love to get back to programming with Python, I am very interested in working with Django. I am familiar with object orineted programming paradigms with python.']
  return (
    <div>
      <p className='skillTypeTitle'>Back-End Skills</p>
      <div className='skillsListItem'>
        <button className='svgButton' onClick={() => setBack(2)}><NodeSvg /></button>
        <button className='svgButton' onClick={() => setBack(1)}><ExpressSvg /></button>
        <button className='svgButton' onClick={() => setBack(4)}><PythonSvg /></button>
        <button className='svgButton' onClick={() => setBack(3)}><FlaskSvg /></button>
      </div>
      <p className='skillsDesc'>{backend[backIndex]}</p>
    </div>
  );
};

export default Backend;
