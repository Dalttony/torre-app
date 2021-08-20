
/**
 * Constants for the whole system
 */
/**
 * [assign object to inmutate another obcjet]
 * @type {object}
 */
 export const assign = Object.assign;

 /**
  * Constants reducers type for the actions  of the network 
  * @type {Object}
  */
 export const networkState = {
     FETCH_REQUEST: "FETCH_REQUEST",
     FETCH_REQUEST_FAILURE: "FETCH_REQUEST_FAILURE",
     FETCH_REQUEST_SUCCESS: "FETCH_REQUEST_SUCCESS",
     FETCH_REQUEST_DISMISS: "FETCH_REQUEST_DISMISS",
 };
 
 
 /**
  * Constant types of the common reducer for displaying messages in the views
  * @type {Object}
  */
 export const view = {
     SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
 };