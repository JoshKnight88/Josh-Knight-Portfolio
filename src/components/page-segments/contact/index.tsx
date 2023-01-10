import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { ContactForm } from '../../contact-form';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/contact.css';
import '../../../assets/page-layout/segment-links.css';

export const Contact: React.FC = () => {
  return (
    <div className='contact-body' id='Contact'>
      <div className='title-and-links'>
        <h1 className='title'>Contact</h1>
        <div>
          <Link to='#About' smooth className='segment-links'>
            About
          </Link>
          <Link to='#Projects' smooth className='segment-links'>
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
