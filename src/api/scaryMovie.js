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