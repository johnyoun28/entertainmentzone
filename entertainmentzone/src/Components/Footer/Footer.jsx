import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_container'>
        <Link to='/'> <p className='footer'> <WhatshotIcon/> Trending</p> </Link>
        <Link to='/movies'><p className='footer'> <MovieCreationIcon/> Movies</p> </Link>
        <Link to='/series' > <p className='footer'> <TvIcon/> TV Series</p> </Link>
        <Link to='/search' > <p className='footer'> <SearchIcon/> Search</p> </Link>
    </div>
  )
}

export default Footer