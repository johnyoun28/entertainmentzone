import React from 'react'
import TV from './TV'

const TVsList = (props) => {
  return (
    <div className='single_content'>
        {
            props.tvs.map(result => (
                <TV key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default TVsList