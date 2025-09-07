// src/components/shared/NavButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import {
  Home,
  Person,
  Work,
  ContactMail,
} from '@mui/icons-material';
import type { NavButtonProps } from '../../types/index';

const NavButton: React.FC<NavButtonProps> = ({ 
  page, 
  label, 
  currentPage, 
  setCurrentPage, 
  isMobile 
}) => {
  const getIcon = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'about': return <Person />;
      case 'projects': return <Work />;
      case 'contact': return <ContactMail />;
      default: return <Home />;
    }
  };

  return (
    <Button
      color={currentPage === page ? 'primary' : 'inherit'}
      onClick={() => setCurrentPage(page)}
      startIcon={getIcon()}
      sx={{
        borderRadius: 2,
        mx: 0.5,
        fontWeight: currentPage === page ? 600 : 400,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: currentPage === page ? '80%' : '0%',
          height: 3,
          backgroundColor: 'primary.main',
          transition: 'all 0.3s ease',
          transform: 'translateX(-50%)',
          borderRadius: 3,
        },
        '&:hover::after': {
          width: '80%',
        },
      }}
    >
      {!isMobile && label}
    </Button>
  );
};

export default NavButton;