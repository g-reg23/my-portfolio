import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const SpecDesc = () => {
  const [vis, setVis] = useState(false);
    const fade = useSpring({
      opacity: vis ? 1 : 0,
      from: {opacity:0},
      config: {duration: 1000},
    });
  return(
    <VisibilitySensor partialVisibility onChange={(isVisible) => setVis(isVisible)}>
      <a.div className='innerDiv spectSect' style={fade}>
        <div className='titleDiv'>
          <a href='https://spectreburn.com' target='_blank' className='gitHubLink' rel="noopener noreferrer"><p className='innerTitle'>SpectreBurn.com</p></a>
          <p className='innerSubtitle'>SPECTRE Token Burn Stats</p>
          <a href='https://github.com/g-reg23/spectre-burn' target='_blank' className='gitHubLink' rel="noopener noreferrer">View Code</a><br />
          <a href='https://spectreburn.com' target='_blank' className='gitHubLink' rel="noopener noreferrer">Visit Site</a>
        </div>
        <div className='infoDiv'>
          <span className='subHeading'>Description</span>
          <p className='techDescription'>
            Spectreburn.com is a burn site I created for the RTC community, an ecosystem of Ethereum tokens.
            SPECTRE or Speculative Resistance is a highly deflationary token, it has a constantly reducing supply.
            So I built this site to showcase SPECTRE and keep the total supply up to date in one easy place. I used Web3.js,
            Etherscan API and CoinGecko API to gather all the information. I also used Victory.js graphing library for data
            visualization.
          </p>
        </div>
      </a.div>
    </VisibilitySensor>
  )
}
export default SpecDesc;
