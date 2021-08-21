/**
 * Reducers for app
 */

import { combineReducers } from 'redux';
import {TYPE} from './constants';

const jobsState = {
    items: [],
    jobsEntities : {}
};

const userState = {
    user: {}
}
const uiState = {
    userView: false
};

export const jobReducer = (state = jobsState, action) =>{
     if (typeof state === 'undefined'){
         state = {data:[]}
     }
     switch(action.type){
         case TYPE.SET_DATA_RESULT:
            const items = action.payload.jobs.map(item => item.id);
            const entities = {};
			action.payload.jobs.forEach((item) => {
					entities[item.id] = item
			});
            return Object.assign({}, state,{
                items: items,
                jobsEntities: entities
			});
            break;
        default:
			return state;
			break;
     }
 };

export const userReducer = (state = userState, action) => {
    if (typeof state === 'undefined'){
        state = {data:[]}
    }

    switch(action.type){
        case TYPE.SET_USER_DATA_RESULT:
            console.log("userReducer");
            return Object.assign({}, state,{
                user: action.payload.user,
			});
            break;
        default:
            return state;
            break;
    }
}

export const uiReducer = (state = uiState, action) => {
    if (typeof state === 'undefined'){
        state = {userView:false}
    }

    switch(action.type){
        case TYPE.SET_USER_DATA_RESULT:
            return Object.assign({}, state,{
                userView: true
			});
            break;
        default:
            return state;
            break;
    }
}

export default combineReducers({jobReducer, userReducer, uiReducer});