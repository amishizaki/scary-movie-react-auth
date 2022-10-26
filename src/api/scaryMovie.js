import apiUrl from '../apiConfig'
import axios from 'axios'

export const scaryMovieCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/scary-movies',
		data: {
			scaryMovie: data,
		},
        headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const scaryMovieIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/scary-movies',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const scaryMovieShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/scary-movies/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const scaryMovieUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/scary-movies/' + id,
		data: {
			scaryMovie: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const scaryMovieDelete = (data, user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/scary-movies/' + id,
		data: {
			scaryMovie: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}