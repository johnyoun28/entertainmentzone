import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesList from './MoviesList'
import Pagination from '../../Components/Pagination/Pagination'
import Genre from '../../Components/Genre/Genre'

const Movies = () => {
    
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [pageNum, setPageNum] = useState()
    const [genre, setGenre] = useState([])
    const [selected, setSelected] = useState([])

    const GenreIds = selected.map((g) => g.id);   

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${GenreIds}`)
        .then(res => {
            setMovies(res.data.results)
            setPageNum(res.data.total_pages)
        })
        .catch(err => {
            console.log(err)
        })
        // eslint-disable-next-line
    },[page, selected])

  return (
    <div className='trending-container'>

        <h2>DISCOVER MOVIES</h2> 
        <Genre genre={genre} setGenre={setGenre} setPage={setPage} selected={selected} setSelected={setSelected} type='movie'/>       
        <MoviesList movies={movies} />
        {pageNum > 1 && <Pagination setPage={setPage} pageNum={pageNum} />}

    </div>
  )
}

export default Movies