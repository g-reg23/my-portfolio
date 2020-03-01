import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const TripDesc = () => {
  const [vis, setVis] = useState(false);
    const fade = useSpring({
      opacity: vis ? 1 : 0,
      from: {opacity:0},
      config: {duration: 1000},
    });
  return(
    <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility>
      <a.div className='innerDiv' style={fade}>
        <div className='titleDiv'>
          <p className='innerTitle'>Trip Planning App</p>
          <p className='innerSubtitle'>Python Flask Web App</p>
          <a href='https://github.com/g-reg23/trip-app' target='_blank' className='gitHubLink' rel="noopener noreferrer">View code on GitHub</a>
        </div>
        <div className='infoDiv'>
          <span className='subHeading'>Front-End</span>
          <p className='techDescription'>This was my first app. It uses jinja2 for server-side templating
          the html on the back-end. This app was built with only vanilla javascript on the front-end. Functionality built with vanilla js on the app included
          a flask-socketio chat client, interactive calendar, expense calendar, and an activity pinning system. I built this before I knew anything about front-end frameworks like
          react. Using closures, proptotypal inheritance, and a lot of DOM manipulation I built my own state management system. As it was a server-side templated
          app, state did not persist between page changes. This helped to lead me to javascript frameworks like react and really appreciate Single Page App architecture.
          </p>
          <span className='subHeading'>Back-End</span>
          <p className='techDescription'>The backend was built using Flask, which is a Python web framework, and MySQL with SQLAlchemy ORM database.
          SQLAlchemy helped to build completely object oriented data models. Authentication system was built with flask-login, it allowed for great control
          with many built-in features. Also was introduced to passlib library for hashing passwords, and jwt tokens for password reset. Used wtforms library for
          simple forms and validation. Worked with flask-socketio for real time chat feature. This site is not deployed, but you can view the code at github
          in the link above.</p>
        </div>
      </a.div>
    </VisibilitySensor>
  )
}
export default TripDesc;
