import React from 'react';
import '../../../assets/page-layout/external-links.css';
export const SideSpinLink: React.FC = () => {
  const handleOpenSideSpin = () => {
    window.location.href = 'https://sidespin-730b4.web.app';
  };
  return (
    <div>
      <button className='external-link' onClick={handleOpenSideSpin}>
        Go to site!
      </button>
    </div>
  );
};
