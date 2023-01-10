import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import '../../../assets/page-layout/project-card/project-card.css';

interface IProjectCardProps {
  image?: React.ReactElement;
  title?: string;
  subtitle?: string;
  bodyText?: string;
  projectLink?: string;
  codeLink?: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  image,
  title,
  bodyText,
  projectLink,
  codeLink,
}) => {
  const [isExpandCard, setIsExpandCard] = useState(true);

  const handleExpand = () => {
    setIsExpandCard(!isExpandCard);
  };
  return (
    <div className={isExpandCard ? 'project-card' : 'expand-project-card'}>
      <div className='image'>{image} </div>
      <div className='title-arrow-container'>
        <h4>{title}</h4>
        <IconButton>
          {isExpandCard ? (
            <ArrowDownwardIcon
              className='expand-arrow'
              onClick={handleExpand}
            />
          ) : (
            <ArrowUpwardIcon className='expand-arrow' onClick={handleExpand} />
          )}
        </IconButton>
      </div>
      <div>{bodyText}</div>
      <div>
        <b>{projectLink}</b>
        <b>{codeLink}</b>
      </div>
    </div>
  );
};
