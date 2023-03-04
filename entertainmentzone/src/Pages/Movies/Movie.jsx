import Badge from '@mui/material/Badge';
import React from 'react'
import ModalContent from '../../Components/ModalContent/ModalContent'


const Movie = (props) => {

    const poster = 'https://image.tmdb.org/t/p/original/'
    const unava =  'https://www.movienewz.com/img/films/poster-holder.jpg';  

  return (
    <ModalContent id={props.result.id} type={'movie'} className='trending-wrapper'>
        <Badge overlap='rectangular' badgeContent = {props.result.vote_average} 
        color={props.result.vote_average > 6 ? "primary" : "error"} />
        <img className='poster_img' src= {props.result.poster_path === null ? `${unava}`: `${poster}${props.result.poster_path}` } alt={props.result.title }  />
        <b className='poster_title'>{props.result.title}</b>
        <div className='poster_content'>
            {'Movie'}
            <span>{props.result.release_date}</span>
        </div>
    </ModalContent>
  )
}

export default Movie