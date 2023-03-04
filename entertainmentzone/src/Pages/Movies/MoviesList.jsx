import React from 'react'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
  return (
    <div className='single_content'>
        {
            movies.map(result => (
                <Movie key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default MoviesList