import React, { useState, useEffect } from 'react'
import './Trending.css'
import TrendingList from './TrendingList'
import axios from 'axios'
import Pagination from '../../Components/Pagination/Pagination'



const Trending = () => {
    
    const [trend, setTrend] = useState([])
    const [page, setPage] = useState(1)
    const [pageNum, setPageNum] = useState()


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_APP_API_KEY}&page=${page}`)
        .then(res => {
            setTrend(res.data.results)
            setPageNum(10)
        })
        .then(console.log(import.meta.env.VITE_APP_API_KEY,'here'))
        .catch(err => {
            console.log(err)
        })
    },[page])

  return (
      <div className='trending-container'>

        <h2>TRENDING TODAY</h2>        
        <TrendingList trend={trend}/>
        {pageNum > 1 && <Pagination setPage={setPage} pageNum={pageNum} />}
        

    </div>
  )
}

export default Trending