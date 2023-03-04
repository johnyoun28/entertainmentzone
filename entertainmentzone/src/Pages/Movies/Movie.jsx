import Badge from '@mui/material/Badge';
import React from 'react'
import ModalContent from '../../Components/ModalContent/ModalContent'


const Movie = ( {result} ) => {

    const poster = 'https://image.tmdb.org/t/p/original/'
    const unava =  'https://www.movienewz.com/img/films/poster-holder.jpg';  

  return (
    <ModalContent id={result.id} type={'movie'} className='trending-wrapper'>
        <Badge overlap='rectangular' badgeContent = {result.vote_average} 
        color={result.vote_average > 6 ? "primary" : "error"} />
        <img className='poster_img' src= {result.poster_path === null ? `${unava}`: `${poster}${result.poster_path}` } alt={result.title }  />
        <b className='poster_title'>{result.title}</b>
        <div className='poster_content'>
            {'Movie'}
            <span>{result.release_date}</span>
        </div>
    </ModalContent>
  )
}

export default Movie