import axios from "axios";

const OPEN_WEATHER_MAP_API_KEY = "6a1bd34a7fdda7d2426579451c9b165e";
const OPEN_WEATHER_MAP_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${OPEN_WEATHER_MAP_API_URL}&q=${city},au`;
	const request = axios.get(url);
	
	// console.log("Request: ", request);
	
	return {
		type: FETCH_WEATHER, 
		payload: request
	};
}
