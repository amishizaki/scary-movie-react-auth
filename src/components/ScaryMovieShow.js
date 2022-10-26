import React, { useEffect, useState, error } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { scaryMovieShow, scaryMovieUpdate, scaryMovieDelete } from '../api/scaryMovie'
import ScaryMovieUpdate from './ScaryMovieUpdate'

const ScaryMovieShow = ({user, msgAlert}) => {

    const [scaryMovie, setScaryMovie] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // call them in the right order
        scaryMovieShow(user, id)
        .then((res) => {
            setScaryMovie(res.data.scaryMovie)
        }
        )
        .catch(() => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Scary Movie Failure: ' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info
        // first spread the current scaryMovie
        // then comma and modify the key to the value you need
        setScaryMovie({...scaryMovie, [event.target.name]: event.target.value})
    }

    const handleUpdateScaryMovie = () => {
        scaryMovieUpdate(scaryMovie, user, id)
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
                message: 'Created Scary Movie Failure' + error,
                variant: 'danger'
            })
        })
    }

    // const toggleDeleteScaryMovie = (event) => {
    //     setDeleted(true)
    // }

    const handleDeleteScaryMovie = () => {
        scaryMovieDelete(scaryMovie, user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleted Scary Movie',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete ScaryMovie Fail: ' + error,
                variant: 'danger'
            })
        })
    }

    // one liner
    if (deleted) navigate('/scary-movies')

    // if(deleted) {
    //     navigate('/scaryMovies')
    // }

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    return (
        <>
            <h3>Title {scaryMovie.title}</h3>
            <p>Director: {scaryMovie.director}</p>
            <p>Year: {scaryMovie.year}</p>
            <button onClick={toggleShowUpdate}>Toggle Update</button>
            {isUpdateShown && (<ScaryMovieUpdate 
                                        scaryMovie={scaryMovie} 
                                        handleChange={handleChange} 
                                        handleUpdateScaryMovie={handleUpdateScaryMovie}/>)}
            <button onClick={handleDeleteScaryMovie}>Delete</button>
            {/* {deleted && (<ScaryMovieDelete handleDeleteScaryMovie={handleDeleteScaryMovie}/>)} */}
        </>
    )
}

export default ScaryMovieShow