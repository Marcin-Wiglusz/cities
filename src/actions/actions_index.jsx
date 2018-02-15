import axios from 'axios';

const API_KEY = 'd2734d0d7a70aca601c84a72586e24c2';
// avoiding 'mixed content error' on gh pages
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_DATA = 'FETCH_DATA'

export function fetchData(city) {
	const url = `${ROOT_URL}&q=${city},us`;

	const request = axios.get(url);
	console.log('Request', request);

	return {
		type: FETCH_DATA,
		payload: request
	}
}
