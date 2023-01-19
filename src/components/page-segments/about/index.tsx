import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { FlipCard } from '../../utils/flip-card';

import html from '../../../assets/images/language-icons/html.png';
import js from '../../../assets/images/language-icons/js.png';
import css from '../../../assets/images/language-icons/css.png';
import react from '../../../assets/images/language-icons/react.png';
import mongo from '../../../assets/images/language-icons/mongo.png';
import node from '../../../assets/images/language-icons/node.png';
import ts from '../../../assets/images/language-icons/ts.png';
import '../../../assets/page-segments/title.css';
import '../../../assets/page-segments/about.css';

export const About: React.FC = () => {
  const cards = [
    {
      front: html,
      back: 'HTML',
      exp: '1 year',
    },
    {
      front: js,
      back: 'Javascript',
      exp: '1 year',
    },
    {
      front: css,
      back: 'CSS',
      exp: '1 year',
    },
    {
      front: react,
      back: 'React',
      exp: '9 months',
    },
    {
      front: mongo,
      back: 'MongoDB',
      exp: '1 year',
    },
    {
      front: node,
      back: 'Node.js',
      exp: '1 year',
    },
    {
      front: ts,
      back: 'Typescript',
      exp: '9 months',
    },
  ];

  return (
    <div className='about-body' id='About'>
      <div className='title-image'>
        <div className='title-container'>
          <h1 className='title'>
            Josh <br />
            Knight
          </h1>
        </div>
        <div className='image-container'>
          <input className='image-of-me' />
        </div>
      </div>
      <div className='text-icons'>
        <div className='about-text'>
          <p>
            Hi! I'm Josh. Having decided to undertake a career change, I started learning
            frontend web development a year ago. I completed an online bootcamp
            and since then have been expanding my knowledge with the help of a
            mentor and by lots of self-driven research and practice. I’ve
            enjoyed developing my skills in React and the work I’ve done using
            MongoDB. I’m looking forward to learning more backend processes and
            languages in the future. It’s been an extremely fulfilling
            experience and I’m excited to start my career in coding. I’ve spent
            many years writing, proof-reading and editing my work, to a
            publishable level, and the work of others, to degree, Masters and
            PhD level. This has given me a keen eye for syntactical errors and
            inconsistencies. Over the last year, I’ve dedicated the vast
            majority of my evenings, weekends and annual leave to learning how
            to code. Here are the
            <Link to='#Projects' className='about-segment-links' smooth>
              Projects
            </Link>
            I've been working on. I’m a keen, respectful learner, ready to take
            my skills to the next level and learn more about best practices and
            working in a professional environment. You can
            <Link to='#Contact' className='about-segment-links' smooth>
              Contact me
            </Link>
            here.
          </p>
        </div>
        <div className='icons-and-image'>
          <div className='icons'>
            <div className='icon-container'>
              {cards.map((card) => (
                <FlipCard front={card.front} back={card.back} exp={card.exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
