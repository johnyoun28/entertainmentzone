import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import './Search.css'
import SearchList from './SearchList'
import Pagination from '../../Components/Pagination/Pagination'

const Search = () => {
  // pass in movie/tv series through props
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [pageNum, setPageNum] = useState()


  const submitHandler = (e) => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`)
      .then(res => {
        setMovies(res.data.results.filter(result => result.media_type !== 'person'));
        setPageNum(res.data.total_pages);
      })
      .catch(err => {
        console.log(err);
      });
  };



  useEffect(() => {
    if (searchTerm) { 
      submitHandler()
    }
    // eslint-disable-next-line
  }, [searchTerm, page]);


  const changeHandler = (evt) => {
    setSearchTerm(evt.target.value)
  }
 

  return (
    <div className='trending-container'>
        <h2> SEARCH MOVIE OR SERIES </h2>
        <form className='form_wrapper'
        onSubmit={submitHandler}>
          <input
          className='form_input'
          type='text'
          placeholder= 'Search'
          onChange={changeHandler}
          ></input>   
        </form>
        <SearchList movies={movies}/>
        {pageNum && <Pagination setPage={setPage} pageNum={pageNum} />}

    </div>
  )
}

export default Search