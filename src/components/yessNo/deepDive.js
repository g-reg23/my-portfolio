import React, { useState } from 'react';

const DeepDive = () => {
  const [showTech, setTech] = useState(false);
  return(
    <div id='deepDive'>
      {!showTech ?
        <a onClick={() => setTech(!showTech)} className='techButton' href='#deepDive'>Show technical deep dive</a> :
        <div className='innerDiv'>
          <div className='titleDiv'>
            <p className='innerTitle'>YessNo.tk</p>
            <p className='innerSubtitle'>MERN stack web app</p>
            <a href='https://github.com/g-reg23/Yes-No-Client' target='_blank' className='gitHubLink' rel="noopener noreferrer">View front-end code on GitHub</a>
          </div>
          <div className='infoDiv'>
            <span className='subHeading'>Front-End</span>
            <p className='techDescription'>Have you ever been part of a group that just never decides to do anything? Wishy-washy answers and no commitment?
            YessNo sets out to help solve this problem, among others. YessNo is a single page application (SPA), built with React.js framework and Redux for state management.
            With Redux I was able to create a single immutable data store. This proved very handy as the web application grew in scope. I was able
            to keep track of an ever growing set of objects throughout the entire application. Data sets included, votes, private votes, users,
            and feedback messages. YessNo utilizes a stateless token authentication system for user registration, authentication, password reset, and
            profile management. Users can create public or private votes. All votes are simple yes or no questions. Public votes
            are open for any Yess/No member to vote on. Private votes set out to answer the initial problem. YessNo members can form groups of voters that are sent unique links
            to the private vote and are then able to vote on the given question within a time constraint specified by the vote creator. Private voters do not have
            to be YessNo members, each voter recieves a unique link to the private vote containing a hash which identifies and authorizes each vote
            member. Unique links are sent to each private member via SMS message and email from the backend restAPI. YessNo was built using React class-based components.
            Some of the great react ecosystem libraries I have used in YessNo are: redux, trophy for graphing vote results, react-spring for transitions and animation,
            and react-strap (reacts bootstrap) for design.</p>
            <span className='subHeading'>Back-End</span>
            <p className='techDescription'>YessNo's back-end is a stateless rest API, that utilizes Node.js and Express.
            API requests are routed to endpoints using express-router, where each request is handled. For authentication I implemented
            a stateless JWT authorization system. If a password and user is validated at login; the user is sent a sameSite, httpOnly cookie
            containing a time expiring JWT token that will authorize the user for a certain time period. After authentication, the
            back-end will query the MongoDB Atlas database. I used Mongoose ODM to help with data modeling and queries. As my data models grew in complexity
            MongoDB's flexibilty was essential. Just one example would be private votes: the ability to embed objects into documents, allowed
            private votes the functionality to store identification and voting information for each individual voter within every private vote.
            MongoDB's JSON-like data structure made it easy to move data from MongoDB atlas to an API endoint and finally to the front-end
            and into the redux store. The site was deployed to DigitalOcean; both static front-end assets and back-end API configured on same droplet and served with nginx.
            SSL certificate configured using letsencrypt certbot.</p>
            <span className='subHeading'>External API's</span>,
            <p className='techDescription'>In order to send SMS messages to private voters an external API was needed. I chose to go with
            Twilio's programmble SMS API. It was easy to use and affordable. Once a private vote is submitted and goes through validation, etc.
            Twilio's SMS API is called for each voter and the unique link is sent within an SMS message that also contains a message with instructions
            and info on the vote. As I was happy with Twilio's SMS API, I decided to switch from node-mailer to Twilio's send-grid email
            API. It has worked well so far, while some emails are still sent to spam, it occurs less with send-grid.</p>
            <span className='subHeading'>Future</span>
            <p className='techDescription'>I plan to continue personal development with YessNo. Continued design upgrades are planned,
            including adding more transitions and animations, and designing a cleaner more beatiful aesthetic. Building a mobile application
            is an guarranteed eventuality. I am very interested in mobile development and am ready to try my hand, I am currently
            researching different mobile stacks, but am leaning toward react native. I am also interested in blockchain, therefore building
            an immutable vote smart contract on the ethereum blockchain is very interesting to me. It could replace public votes or become
            it's own entity. Email me if you have any interest in collaborating on something similar to an immutable voting system on the Ethereum blockchain.</p>
          </div>
          <a href='#techButtonScroll' className='minimize' onClick={() => setTech(!showTech)}>Click here to minimize</a>
        </div>
      }
    </div>
  )
}
export default DeepDive;
