import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background font-semibold text-center p-4 mt-32 flex items-center justify-center">
      <div>&copy; 2024 | KANG MING | <a className='icon-appear' href="https://github.com/chxnkm" target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
      </a>
        <a className='icon-appear' href="https://linkedin.com/in/ckangming" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
        </a>
        <a className='icon-appear' href="mailto:ckangming0.com">
          <EmailIcon style={{ fontSize: 24 }} className='hover:scale-110 mb-1 mr-1' />
        </a></div>

    </footer>
  );
};

export default Footer;
