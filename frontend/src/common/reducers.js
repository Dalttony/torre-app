/** 
 * This is the common reducer to handle with Network (fetch), messages and what ever
 * @type function 
 */
 import { networkState, view, form } from "./constants";

 const appInitialState = {
     isFetching: false,
     error: false,
     success: false,
     successMessage: "",
     errorMessage: ""
 }
 
 export default (state = appInitialState, action) => {
     switch (action.type) {
         case networkState.FETCH_REQUEST:
             return Object.assign({}, state, {
                 isFetching: action.fetchingState
             });
             break;
         case networkState.FETCH_REQUEST_SUCCESS:
             return Object.assign({}, state, {
                 success: true,
                 successMessage: action.message
             });
             break;
         case networkState.FETCH_REQUEST_FAILURE:
             return Object.assign({}, state, {
                 error: true,
                 succeserrorMessage: action.message
             });
             break;
         case view.SET_ERROR_MESSAGE:
             return Object.assign({}, state, {
                 errorMessage: action.message, error: action.error
             });
             break;
         default:
             return state;
             break;
     }
 }