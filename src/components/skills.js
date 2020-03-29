import React, {useState} from "react";
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Backend from './skillComps/backend';
import Database from './skillComps/database';
import FrontEnd from './skillComps/frontEnd';
import DevOps from './skillComps/devOps';

// show and setShow set an index to determine which array of skills to show. Ie if show === 1 then show backend skill icons.
// Each skill type has its own array of descriptions for each skill within that skill type.
// Each icon represents an index that corresponds to its description in its array.
// After a skill type is changed, setType is called with the corresponding index of that skill type,
// all three indexes are set back to 0.


function Skills() {
  const [vis, setVis] = useState(false);
  const [typeIndex, setType] = useState(0);
  const style = useSpring({
    transform: vis ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
    opacity: vis ? 1 : 0,
    from: {opacity: 0, transform:'scaleX(0) scaleY(0)'},
    config: {duration: 2000},
    padding: '1%',
  });
  const backgroundAnim = useSpring({
    opacity: vis ? 1 : 0,
    from: {opacity:0},
    config: {duration: 2000},
  })
  console.log(typeIndex)
  return(
      <VisibilitySensor onChange={(isVisible) => setVis(isVisible)} partialVisibility offset={{bottom:300}}>
        <div className='skillsOuter'>
          <a.div style={backgroundAnim} className='skillsDiv'>
             <a.div style={style}>
                <div className='typeDiv'>
                  {typeIndex === 0 ?
                    <button className='skillTypeFocus' onClick={() => setType(0)}>Front-End</button>
                    :
                    <button className='skillType' onClick={() => setType(0)}>Front-End</button>
                  }
                  {typeIndex === 1 ?
                    <button className='skillTypeFocus' onClick={() => setType(1)}>Back-End</button>
                    :
                    <button className='skillType' onClick={() => setType(1)}>Back-End</button>
                  }
                  {typeIndex === 2 ?
                    <button className='skillTypeFocus' onClick={() => setType(2)}>Database</button>
                    :
                    <button className='skillType' onClick={() => setType(2)}>Database</button>
                  }
                  {typeIndex === 3 ?
                    <button className='skillTypeFocus' onClick={() => setType(3)}>Dev-Ops</button>
                    :
                    <button className='skillType' onClick={() => setType(3)}>Dev-Ops</button>
                  }
                </div>
                {typeIndex === 0 ?
                    <FrontEnd /> : typeIndex === 2 ?
                    <Database /> : typeIndex === 1 ?
                    <Backend /> :
                    <DevOps />
                }
              </a.div>
          </a.div>
          <p style={{color:'whitesmoke'}}>All icons, excluding Flask and MySQL,  by </p><a className='iconLink' href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
        </div>
      </VisibilitySensor>
  )
}

export default Skills;
