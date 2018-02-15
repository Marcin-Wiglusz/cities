import { combineReducers } from 'redux';

import WeatherReducer from "./reducer_weather.jsx";

const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
