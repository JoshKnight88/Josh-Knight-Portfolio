import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { SegmentCard } from '../../page-layout/card';
import { ContactForm } from '../../contact-form';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/contact.css';

export const Contact: React.FC = () => {
  return (
    <section className='contact-body' id='Contact'>
      <h1 className='title'>Contact</h1>
      <ContactForm />

      <Link to='#About' smooth>
        About
      </Link>
      <Link to='#Projects' smooth>
        Projects
      </Link>
    </section>
  );
};
