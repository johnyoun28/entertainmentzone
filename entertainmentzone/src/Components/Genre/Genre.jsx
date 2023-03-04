import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chip from '@mui/material/Chip';
import './Genre.css'


const Genre = ({ type, genre, setGenre, selected, setSelected, setPage }) => {


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`)
        .then(res => {
            setGenre(res.data.genres)
    
        })
        .catch(err => {
            console.log(err)
        })
        // eslint-disable-next-line
    }, [])

    const addHandler = item => {
        setSelected([...selected, item])
        setGenre(genre.filter((g) => g.id !== item.id))
    }


    const deleteHandler = item => {
        setSelected(selected.filter((sel) => sel.id !== item.id))
        setGenre([...genre, item])
    }

    return (

        <div className='genre_container' style={{padding: '6px 0'}}>
            {
               selected && selected.map(result => (
                    <Chip 
                    clickable
                    key={result.id} 
                    onDelete={() => deleteHandler(result)}
                    color='primary'
                    size="small"
                    label={result.name} />
                ))
            }

            {
                genre && genre.map(result => (
                    <Chip
                     clickable
                     size='small'
                     style={{margin: 2, backgroundColor: 'white'}}
                     key={result.id}
                    label={result.name} 
                    onClick={() => addHandler(result)}     
                    />
                    
                ))
            }

        </div>
  )
}

export default Genre