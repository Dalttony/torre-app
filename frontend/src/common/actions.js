/**
 * Common actions which do a little bit change in the app
 * the only way for interacting with the app by shifting the state
 */

 import { networkState, view } from "./constants";


 export const sendRequest = () => {
     return { type: networkState.FETCH_REQUEST, fetchingState: true };
 };
 
 export const dismissRequest = () => {
     return { type: networkState.FETCH_REQUEST_DISMISS, fetchingState: false };
 };
 
 export const successRequest = (data) => {
     return { type: networkState.FETCH_REQUEST_SUCCESS, data};
 };
 
 export const failureRequest = (data) => {
     return { type: networkState.FETCH_REQUEST_FAILURE, data};
 };
 
 
 /**
  * set the error messages to display in the view component
  * @param {string} message 		it is a error, info or warning
  */
 
 export const setErrorMessage = (data) => {
     return {type: view.SET_ERROR_MESSAGE, data, error: true };
 };