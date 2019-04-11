import {  KEY_SKILL, KEY_DEFAULT } from '../actions/actionTypes';
import { REHYDRATE } from 'redux-persist'

export const initialState = {
	skillActions: [],
}

function rootReducer(state = initialState, action) {
switch(action.type) {
	
	case KEY_SKILL:
	return {
	...state,
	skills: action.payload
	}
	
	case KEY_DEFAULT:
	return state 
	
	case REHYDRATE:
	return {
	...state,
	skills: action.payload.rootReducer.skills
	}
	
	
	default:
	return state
}

}

export default rootReducer