import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const XBDesc = () => {
  const [vis, setVis] = useState(false);
    const fade = useSpring({
      opacity: vis ? 1 : 0,
      from: {opacity:0},
      config: {duration: 1000},
    });
  return(
    <VisibilitySensor partialVisibility onChange={(isVisible) => setVis(isVisible)}>
      <a.div className='innerDiv xampDDiv' style={fade}>
        <div className='titleDiv'>
          <p className='innerTitle'>XampBurn.com</p>
          <p className='innerSubtitle'>Xamp Token Burn Stats</p>
          <a href='https://xampburn.com' target='_blank' className='gitHubLink' rel="noopener noreferrer">Visit Site</a>
        </div>
        <div className='infoDiv'>
          <span className='subHeading'>Description</span>
          <p className='techDescription'>
          XampBurn.com is a website I built for the Antiample community, of which Xamp is the native token. It is a deflationary ERC20 token on the Ethereum blockchain,
          I built this site to give Xamp more exposure and to work with the many different tools and ecosystems needed.
          While building this site I worked with the Ethereum network, I gained knowledge of Solidity smart contract programming language, as
          well as worked with web3.js and Metamask APIs to interact with the blockchain. I also worked extensively with the CoinGecko API for
          price data. Utilizing web3 I was able to call many of the Xamp smart contract methods. With Metamask I was able to make a button to call Xamp's
          rebase function, which is a payable function that checks Xamps price and if the price is lower than the day before it burns 1% of the entire
          token supply.
          </p>
        </div>
      </a.div>
    </VisibilitySensor>
  )
}
export default XBDesc;
