import React from 'react';
import '../../../assets/page-layout/external-links.css'
export const ClimbingCommunityLink: React.FC = () => {
  const handleOpenClimbingCommunity = () => {
    window.location.href = 'https://climbing-community-80703.web.app';
  };
  return (
    <div >
      <button className='external-link' onClick={handleOpenClimbingCommunity}>Go to site!</button>
    </div>
  );
};
