import React from 'react'

const ScaryMovieUpdate = ({ scaryMovie, handleChange, handleUpdateScaryMovie }) => {
    return (
        <>
            <input 
                type='text'
                value={scaryMovie.title}
                name='title'
                placeholder='Title'
                onChange={handleChange}
            />
            <input 
                type='text'
                value={scaryMovie.director}
                name='director'
                placeholder='Director'
                onChange={handleChange}
            />
            <input 
                type='text'
                value={scaryMovie.year}
                name='year'
                placeholder='Year'
                onChange={handleChange}
            />
            <button onClick={handleUpdateScaryMovie}>Update Scary Movie</button>
        </>
    )
}

export default ScaryMovieUpdate