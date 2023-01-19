import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { ContactForm } from '../../contact-form';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/contact.css';
import '../../../assets/page-layout/segment-links.css';
import { SocialsLinks } from '../../page-layout/socials-links';

export const Contact: React.FC = () => {
  return (
    <div className='contact-body' id='Contact'>
      <div className='title-and-links'>
        <h1 className='title'>Contact</h1>
        <div>
          <HashLink to='#About' smooth className='segment-links'>
            About
          </HashLink>
          <HashLink to='#Projects' smooth className='segment-links'>
            Projects
          </HashLink>
        </div>
      </div>
      <div className='contact-text'>
        <p>
          If you'd like to talk to me about anything, feel free to send me a
          message!
        </p>
      </div>
      <div className='form'>
        <ContactForm />
      </div>
    </div>
  );
};
