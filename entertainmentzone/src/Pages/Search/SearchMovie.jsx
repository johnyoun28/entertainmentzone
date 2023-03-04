import Badge from '@mui/material/Badge';
import React, { useState } from 'react'
import ModalContent from '../../Components/ModalContent/ModalContent'


const SearchMovie = ( {result} ) => {


    const poster = 'https://image.tmdb.org/t/p/original/'
    const unava =  'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <ModalContent id={result.id} type={result.media_type}>
         <Badge overlap='rectangular' badgeContent = {result.vote_average} 
        color={result.vote_average > 6 ? "primary" : "secondary"} />
        <img className='poster_img' src= {result.poster_path === null ? `${unava}`: `${poster}${result.poster_path}` } alt={result.title }  />
        <b className='poster_title'>{result.media_type === 'movie' ? result.title : result.name}</b>
        <div className='poster_content'>
            {result.media_type === 'movie' ? 'Movie' : 'TV Series'}
            <span>{result.media_type === 'movie' ? result.release_date : result.first_air_date}</span>
        </div>
    </ModalContent>
  )
}

export default SearchMovie