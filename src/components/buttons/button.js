import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom'; 

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#3f9c14', 
    },
  },
  
});

export const MainButton = ({ title, onClick }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Button
        onClick={onClick}
        disableElevation
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          textTransform: 'uppercase',
          borderRadius: '20px',
          padding: '17px 25px 19px 25px',
          margin: '30px 0px 0px 40px',
          letterSpacing: '0.7px',
          fontSize: '14px',
          fontWeight: '800',
          fontFamily: 'Raleway, sans-serif',
          color: '#eaeaea',
          borderColor: '#eaeaea',
          backgroundColor: '#cc2525',
          transition: 'background-color 300ms, border-color 300ms',
          '&:hover': {
            backgroundColor: '#a61818',
            borderColor: '#3f9c14',
          },
        }}
      >
        {title}
      </Button>
    </ThemeProvider>
  );
};

export const HeaderButton = ({ title, link }) => {
  const handleClick = () => {
    const section = document.getElementById(link);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Button
        onClick={handleClick}
        disableElevation
        variant="outlined"
        sx={{
          border: 'none',
          alignItems: 'center',
          height: '42px',
          justifyContent: 'center',
          borderRadius: '8px',
          margin: '10px',
          padding: '5px 10px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          color: '#eaeaea',
          width: '100%',
          fontSize: '16px',
          fontWeight: 300,
          lineHeight: '143%',
          overflow: 'hidden',
          position: 'relative',
          transition: 'background-color 300ms, border-color 300ms',
          '&:hover': {
            backgroundColor: '#a61818',
           border: 'none',
          },
        }}
      >
        {title}
        </Button>
    </ThemeProvider>
  );
};

export const PhoneButton = ({ phoneNumber, buttonText }) => {
  return (
    <Link to={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
      <Button
        type="button"
        disableElevation
        sx={{
          display: 'flex',
          color: '#eaeaea',
          alignItems: 'center',
          width: '100%',
          height: '40px',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.6px',
        }}
      >
        <PermPhoneMsgIcon sx={{width: '20px',
          height: '20px', marginRight: '3px' }} />
        {buttonText} 
     
      </Button>
    </Link>
  );
};

export const InstagramButton = ({ profileLink, buttonText }) => {
  return (
    <Link to={profileLink} style={{ textDecoration: 'none' }}>
      <Button
        type="button"
        disableElevation
        sx={{
          display: 'flex',
          color: '#eaeaea',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '40px',
          fontFamily: 'Raleway, Sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.7px',
          
        }}
      >
        <InstagramIcon sx={{ width: '20px',
          height: '20px', marginRight: '3px' }} />

        {buttonText }
      </Button>
    </Link>
  );
};

export const MenuButton = ({ title, disabled, type, onClick }) => {
  const isScreenSmall = useMediaQuery('(max-width:780px)');

  if (!isScreenSmall) {
    return null; 
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      sx={{
        display: 'flex',
        color: '#eaeaea',
        alignItems: 'center',
        height: '49px',
        border: 'none',
        '&:disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: '#161616',
          opacity: '0.6',
        },
      }}
    >
      <MenuIcon sx={{ marginRight: '8px' }} />
      {title}
    </Button>
  );
};