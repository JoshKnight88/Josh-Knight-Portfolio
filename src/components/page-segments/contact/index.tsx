import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { SegmentCard } from '../../page-layout/card';
import { ContactForm } from '../../contact-form';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/contact.css';

export const Contact: React.FC = () => {
  return (
    <div className='contact-body' id='Contact'>
      <div className='title-and-links'>
        <h1 className='title'>Contact</h1>
        <div>
          <Link to='#About' smooth className='contact-segment-links'>
            About
          </Link>
          <Link to='#Projects' smooth className='contact-segment-links'>
            Projects
          </Link>
        </div>
      </div>
      <div className='form'>
        <ContactForm />
      </div>
    </div>
  );
};
