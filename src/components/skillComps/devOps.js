import React, { useState } from 'react';
import DigitalOceanSvg from '../svg/digitalOceanSvg';
import GitHubSvg from '../svg/gitHubSvg';

const DevOps = () => {
  const [devIndex, setDev] = useState(0);
  const devops = ['Click an icon read about that skill. To change the overall skill type, click a different skill group at the top.',
  'GitHub is a code hosting platform. It utilizes the version control system git, it is very useful for collaboration. I have experience working with git version control on my projects. I have a solid understanding of git workflow, branching, and other git techniques. I am currently working to increase my GitHub and git skills and actively looking for open source projects with which to contribute.',
  'DigitalOcean is a cloud based hosting service. I have experience configuring digitalocean droplets. Utilizing linux skills I have set up multiple servers to serve production web applications. Experience using pm2 as a process manager to run a node server. I am also experienced in setting up an nginx server to serve both static assets and route api requests to the server.']
  return (
    <div>
      <p className='skillTypeTitle'>Dev-Ops Skills</p>
      <div className='skillsListItem'>
        <button className='svgButton' onClick={() => setDev(1)}><GitHubSvg /></button>
        <button className='svgButton' onClick={() => setDev(2)}><DigitalOceanSvg /></button>
      </div>
      <p className='skillsDesc'>{devops[devIndex]}</p>
    </div>

  )
}

export default DevOps;
