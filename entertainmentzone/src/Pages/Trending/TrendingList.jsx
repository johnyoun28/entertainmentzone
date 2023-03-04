import React from 'react'
import Trend from './Trend'

const TrendingList = ( {trend} ) => {
  return (
    <div className='single_content'>
        {
            trend.map(result => (
                <Trend key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default TrendingList