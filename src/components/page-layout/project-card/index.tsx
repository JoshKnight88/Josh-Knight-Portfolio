import * as React from 'react';

import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

import '../../../assets/page-layout/project-card.css';
import { JsxElement } from 'typescript';

interface IProjectCardProps {
  image?: React.ReactElement;
  title?: string;
  subtitle?: string;
  bodyText?: string;
  projectLink?: React.ReactElement;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  image,
  title,
  bodyText,
  projectLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='project-card'>
        {image}
        <h4>{title}</h4>
        <IconButton>
          {!isOpen ? (
            <ExpandMoreIcon onClick={handleOpen} />
          ) : (
            <ExpandLessIcon onClick={handleOpen} />
          )}
        </IconButton>
      </div>
      <div>
        {isOpen && (
          <div className='card-open'>
            {bodyText}
            {projectLink}
          </div>
        )}
      </div>
    </div>
  );
};
