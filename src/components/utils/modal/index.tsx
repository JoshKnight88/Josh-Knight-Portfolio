import React, { useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../../assets/components/utils/modal/modal.css';
import IconButton from '@mui/material/IconButton';
import { useOnClickOutside } from 'usehooks-ts'

interface IModalProps {
  title: String;
  subtitle: String;
  handleClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({ title, subtitle, handleClose }) => {
// const ref = useRef(null);

//  const handleClickOutside = () => {
//    handleClose()
//    console.log('clicked outside');
//  };
//  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className='modal'>
      <IconButton className='close-icon' onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <div className='modal-title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
    </div>
  );
};
