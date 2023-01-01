import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import { SegmentCard } from "../../page-layout/card";
import html from '../../../assets/images/language-icons/html.png'
import js from "../../../assets/images/language-icons/js.png";
import css from "../../../assets/images/language-icons/css.png";
import react from "../../../assets/images/language-icons/react.png";
import mongo from "../../../assets/images/language-icons/mongo.png";
import node from "../../../assets/images/language-icons/node.png";
import ts from "../../../assets/images/language-icons/ts.png";
import '../../../assets/page-segments/title.css'
import '../../../assets/page-segments/about.css'

export const About: React.FC = () => {
  const languageIcons = [html, js, css, react, mongo, node, ts]

 
  return (
    <section className='about-body' id='About'>
      <h1 className='title'>Josh Knight</h1>
      <div>
        {languageIcons.map((icon) => {
          return <img src={icon} alt='language icons'></img>;
        })}
      </div>
      <Link to='#Projects' smooth>
        Projects
      </Link>
      <Link to='#Contact' smooth>
        Contact
      </Link>
    </section>
  );
};
