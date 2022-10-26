import React, {useState} from 'react'
import { scaryMovieCreate } from '../api/scaryMovie'

const ScaryMovieCreate = ({ user, msgAlert, error }) => {

    const defaultScaryMovie = {
        title: '',
        director: '',
        year: ''

    }

    const [scaryMovie, setScaryMovie] = useState(defaultScaryMovie)

    const handleChange = (event) => {
        // to keep the values as users input info
        // first spread the current scary movie
        // then comma and modify the key to the value you need
        setScaryMovie({...scaryMovie, [event.target.name]: event.target.value})
    }

    const handleCreateScaryMovie = () => {
        scaryMovieCreate(scaryMovie, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Created Scary Movie',
                variant: 'success'
            })
        })
        .catch(() => {
            msgAlert({
                heading: 'Failure',
                message: 'Created Scary Movie Fail: ' + error,
                variant: 'danger'
            })
        })
    }

    return (
        <>
            <input 
                type='text'
                value={(scaryMovie.title)}
                name='title'
                placeholder='Title'
                onChange={handleChange}
            />
            <input 
                type='text'
                value={(scaryMovie.director)}
                name='director'
                placeholder='Director'
                onChange={handleChange}
            />
            <input 
                type='number'
                value={(scaryMovie.year)}
                name='year'
                placeholder='Year'
                onChange={handleChange}
            />
            <button onClick={handleCreateScaryMovie}>Create Scary Movie</button>
        </>
    )
}

export default ScaryMovieCreate