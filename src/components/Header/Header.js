import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { Link } from 'react-router-dom';

const Header = () => {
  const { homepage, title } = header
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const iconStyles = {
    color: themeName === 'dark' ? '#bdbddd' : '#2978b5', // Change color based on theme
    fontSize: '2rem' // Adjust size as needed
  };
  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <Link to="/" className='link'>
            <IconButton
              type='button'
              onClick={toggleTheme}
              className='btn btn--icon nav__theme'
              aria-label='toggle theme'
            >
              <HomeIcon style={iconStyles} />
            </IconButton>
          </Link>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
