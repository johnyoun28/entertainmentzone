import React from 'react'
import Trend from './Trend'

const TrendingList = (props) => {
  return (
    <div className='single_content'>
        {
            props.trend.map(result => (
                <Trend key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default TrendingList