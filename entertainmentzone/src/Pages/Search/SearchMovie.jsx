import Badge from '@mui/material/Badge';
import React, { useState } from 'react'
import ModalContent from '../../Components/ModalContent/ModalContent'


const SearchMovie = (props) => {


    const poster = 'https://image.tmdb.org/t/p/original/'
    const unava =  'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <ModalContent id={props.result.id} type={props.result.media_type}>
         <Badge overlap='rectangular' badgeContent = {props.result.vote_average} 
        color={props.result.vote_average > 6 ? "primary" : "secondary"} />
        <img className='poster_img' src= {props.result.poster_path === null ? `${unava}`: `${poster}${props.result.poster_path}` } alt={props.result.title }  />
        <b className='poster_title'>{props.result.media_type === 'movie' ? props.result.title : props.result.name}</b>
        <div className='poster_content'>
            {props.result.media_type === 'movie' ? 'Movie' : 'TV Series'}
            <span>{props.result.media_type === 'movie' ? props.result.release_date : props.result.first_air_date}</span>
        </div>
    </ModalContent>
  )
}

export default SearchMovie