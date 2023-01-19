import React from 'react';
import linkedIn from '../../../assets/images/socials-links/linkedin-24.png';
import gitHub from '../../../assets/images/socials-links/github-logo-24.png';
import '../../../assets/page-layout/socials-links.css'

export const SocialsLinks: React.FC = () => {
  const handleOpenLinkedIn = () => {
    window.location.href = 'https://linkedin.com/in/josh-knight-054a89236';
  };

  const handleOpenGitHub = () => {
    window.location.href = 'https://github.com/JoshKnight88';
  };

  return (
    <div className='socials-links-container'>
      <button className='socials-links-buttons' onClick={handleOpenLinkedIn}>
        <img src={linkedIn} alt='linkedIn-icon' />
      </button>
      <button className='socials-links-buttons' onClick={handleOpenGitHub}>
        <img src={gitHub} alt='gitHub-icon' />
      </button>
    </div>
  );
};
