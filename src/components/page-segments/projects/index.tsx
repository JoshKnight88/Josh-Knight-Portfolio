import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { SegmentCard } from '../../page-layout/card';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/projects.css';

export const Projects: React.FC = () => {
  return (
    <div className='projects-body' id='Projects'>
      <div className='title-and-links'>
        <h1 className='title'>Projects</h1>
        <div>
          <Link to='#About' smooth className='projects-segment-links'>
            About
          </Link>
          <Link to='#Contact' smooth className='projects-segment-links'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
