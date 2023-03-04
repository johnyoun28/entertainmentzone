import React from 'react'
import SearchMovie from './SearchMovie'

const SearchList = (props) => {
  return (
    <div className='single_content'>
        {
           props.movies && props.movies.map(result => (
                <SearchMovie key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default SearchList