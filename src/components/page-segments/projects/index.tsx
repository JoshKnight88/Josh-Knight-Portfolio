import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ProjectCard } from '../../page-layout/project-card';

import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/projects.css';
import '../../../assets/page-layout/segment-links.css';
import sideSpin from '../../../assets/images/project-cards/project-img-sideSpin.png';
import climbComm from '../../../assets/images/project-cards/project-img-climb-comm.png';

export const Projects: React.FC = () => {
  return (
    <div className='projects-body' id='Projects'>
      <div className='segment-title-and-links'>
        <h1 className='title'>Projects</h1>
        <div>
          <Link to='#About' smooth className='segment-links'>
            About
          </Link>
          <Link to='#Contact' smooth className='segment-links'>
            Contact
          </Link>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            quam. Dolorum doloremque quae veniam aliquid saepe odio quas vitae
            autem rerum. Perspiciatis facere quisquam numquam, optio distinctio
            quae accusantium exercitationem.
          </p>
        </div>
      </div>
      <div className='project-cards'>
        <ProjectCard
          image={
            
            <img
              src={climbComm}
              alt='climb-comm image'
              className='climb-comm-image'
            ></img>
          }
          title='Climbing Community'
          bodyText="The problem: I'm a keen climber, 
            but sometimes none of my friends are available to climb when I am. 
            This website is an ongoing project for a friend and I. The Buddy Search feature 
            allows users to post which gyms they climb at, what type of climbing they want to do, 
            and their availability throughput the week. We are also working on a feature that allows 
            climbers to track their progress with different routes at their gyms. We manage the work 
            flow with tickets on a kanban board and pull requests. Languages and frameworks: Typescript, HTML, MUI, GrapgQL, TypeORM"
          projectLink='link to external project'
          codeLink='link to github'
        />
        <ProjectCard
          image={
            <img
              src={sideSpin}
              alt='sideSpin image'
              className='sideSpin-image'
            ></img>
          }
          title='sideSpin'
          bodyText='The problem: My friend bought a table tennis table. He and his partner filled a page and a half of paper 
            with score tallies, only to find they were dead-even. This app incorporates a version of the rating system used to 
            rank chess players, so my friends wins and losses against other players could be used to determine which of them was 
            truly the best. The app allows you to add players, record games and view a leaderboard of all players and their up-to-date 
            rankings. Languages and frameworks: Javascript, HTML, CSS, MongoDB, Express, Node '
          projectLink='link to external project'
          codeLink='link to github'
        />
      </div>
    </div>
  );
};
