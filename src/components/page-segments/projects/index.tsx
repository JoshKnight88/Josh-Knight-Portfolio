import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ProjectCard } from '../../page-layout/project-card';

import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/projects.css';
import sideSpin from '../../../assets/images/project-cards/project-img-sideSpin.png'
export const Projects: React.FC = () => {
  return (
    <div className='projects-body' id='Projects'>
      
        <h1 className='title'>Projects</h1>
        <div className='project-cards'>
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
      
      <div className='segment-links'>
        <Link to='#About' smooth className='projects-segment-link'>
          About
        </Link>
        <Link to='#Contact' smooth className='projects-segment-link'>
          Contact
        </Link>
      </div>
    </div>
  );
};
