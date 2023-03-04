import React from 'react'
import TV from './TV'

const TVsList = ( {tvs} ) => {
  return (
    <div className='single_content'>
        {
            tvs.map(result => (
                <TV key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default TVsList