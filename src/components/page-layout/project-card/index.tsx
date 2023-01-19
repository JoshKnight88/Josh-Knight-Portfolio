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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        {image}
        <h4>{title}</h4>
        <IconButton>
          {!isOpen ? (
            <ArrowDownwardIcon onClick={handleOpen} />
          ) : (
            <ArrowUpwardIcon onClick={handleOpen} />
          )}
        </IconButton>
      </div>
      <div>
        {isOpen && (
          <div>
            {bodyText}
            {projectLink}
            {codeLink}
          </div>
        )}
      </div>
    </div>
  );
};
