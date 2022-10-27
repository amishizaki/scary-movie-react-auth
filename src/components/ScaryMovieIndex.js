import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { scaryMovieIndex } from '../api/scaryMovie'

const ScaryMovieIndex = ({ user, msgAlert }) => {

    const [allScaryMovies, setAllScaryMovies] = useState([])

    useEffect(() => {
        scaryMovieIndex(user)
        .then(res => {
            setAllScaryMovies(res.data.scaryMovies)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index ScaryMovies Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allScaryMoviesJSX = allScaryMovies.map(scaryMovie => {
        return (
            <Link to={scaryMovie._id} key={scaryMovie._id}>
            <li>Title: {scaryMovie.title} Director: {scaryMovie.director} Year: {scaryMovie.year}</li>
            </Link>
        )
    })

    return (
        <>
            <h1>Spooky Scary Movies</h1>
            <ul>{allScaryMoviesJSX}</ul>
        </>
    )
}

export default ScaryMovieIndex