import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import { SegmentCard } from "../../page-layout/card";
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/projects.css';



export const Projects: React.FC = () => {
  return (
    <section className='projects-body' id='Projects'>
      <h1 className='title'>Projects</h1>

      <Link to='#About' smooth>
        About
      </Link>
      <Link to='#Contact' smooth>
        Contact
      </Link>
    </section>
  );
};
