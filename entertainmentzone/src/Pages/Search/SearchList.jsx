import React from 'react'
import SearchMovie from './SearchMovie'

const SearchList = ( {movies} ) => {
  return (
    <div className='single_content'>
        {
           movies && movies.map(result => (
                <SearchMovie key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default SearchList