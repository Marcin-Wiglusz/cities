import {FETCH_DATA} from "../actions/actions_index.jsx";

export default function(state = [], action) {

	//payload.data
	console.log('Action', action);

	switch (action.type) {
		case FETCH_DATA:
		//create new array with previous cities
			return [action.payload.data, ...state];
	}
	return state;
}
