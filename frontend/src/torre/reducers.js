/**
 * Reducers for app
 */

import { combineReducers } from 'redux';
import {TYPE} from './constants';

const jobsState = {
    items: [],
    jobsEntities : {}
};

const uiState = {
    
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

export const uiReducer = (state, action) => {
    return {};
}

export default combineReducers({jobReducer, uiReducer});