import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {
  return (
    <div className='single_content'>
        {
            props.movies.map(result => (
                <Movie key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default MoviesList