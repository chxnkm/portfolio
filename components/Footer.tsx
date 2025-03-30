import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const today = new Date();

const Footer= () => {
  return (
    <footer className="bg-background font-semibold text-center p-4 mt-32 flex items-center justify-center">
      <div>&copy; {today.getFullYear()} | KANG MING | <a className='github-icon icon-appear' href="https://github.com/chxnkm" target="_blank" rel="noopener noreferrer" aria-label='GitHub Link'>
        <GitHubIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
      </a>
        <a className='linkedin-icon icon-appear' href="https://linkedin.com/in/ckangming" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn Link'>
          <LinkedInIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
        </a>
        <a className='email-icon icon-appear' href="mailto:me@chenkm.com" aria-label='Email Link'>
          <EmailIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
        </a></div>
    </footer>
  );
};

export default Footer;
