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
      <div className='col-left'>
        <h1 className='title'>
          Josh <br />
          Knight
        </h1>

        <input className='photo' />
      </div>
      <div className='col-mid'>
        <p>
          Lorem ipsum dolor sit amet. Eum suscipit provident qui quia dolorum
          eum earum nesciunt sit consequatur quia et nisi magnam! Ut consequatur
          perspiciatis et nesciunt placeat qui quia deleniti ut omnis voluptates
          ut sint sunt. Et officia natus sit dolor maiores qui nihil molestiae
          id numquam praesentium est animi dolores est quibusdam unde. Ut
          dignissimos vitae ut officia corrupti et minima dolorem! Et labore
          porro et ullam voluptatem quo laboriosam dolor. Ut maxime quia hic
          perspiciatis explicabo qui velit quia? Vel voluptas optio At incidunt
          quia id Quis iste. Et dicta exercitationem non ducimus officia rem
          fugiat velit. Sit cupiditate optio est inventore quos sit totam
          maiores et culpa amet est internos quasi et voluptatem voluptatem!
        </p>
        <Link to='#Projects' smooth>
          Projects
        </Link>
        <Link to='#Contact' smooth>
          Contact
        </Link>
      </div>
      <div className='col-right'>
        <div className='icon-container'>
          {cards.map((card) => (
            <FlipCard front={card.front} back={card.back} exp={card.exp} />
          ))}
        </div>
      </div>
    </div>
  );
};
