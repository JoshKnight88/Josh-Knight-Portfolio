import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/components/modal.css';
import IconButton from '@mui/material/IconButton';

interface IModalProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const Modal: React.FC<IModalProps> = ({ title, subtitle, onClick }) => {
  return (
    <div className='modal'>
      <IconButton className='close-icon' onClick={onClick}>
        <CloseIcon />
      </IconButton>
      <div className='modal-title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
    </div>
  );
};
