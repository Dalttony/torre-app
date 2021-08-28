
import {TYPE} from './constants';
import service from './services';
import { sendRequest, 
    dismissRequest, 
    successRequest,
    failureRequest,
    } from '../common/actions';

export const loadJobs = () => {
    return (dispatch, getState) => {
        dispatch(sendRequest());

        service.loadJobs((response)=>{
            if (response.status == 200){
                if('error' in response.data){
                    dispatch(failureRequest());
                 }else{
                    dispatch({type:TYPE.SET_DATA_RESULT, payload:{jobs:response.data.data.results}});
                    dispatch(successRequest());
                 }
                 dispatch(dismissRequest());
            }else{
                dispatch(failureRequest());
            }
           
        },
        (error) =>{
            dispatch(dismissRequest());
            dispatch(failureRequest());
        }
        );
    }
};

export const getUser = (username) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());
        service.user(username)( (response)=>{
             if(response.status == 200){
                 if('error' in response.data){
                    dispatch(failureRequest());
                 }else{
                    dispatch({type:TYPE.SET_USER_DATA_RESULT, payload:{user:response.data.data}});
                    dispatch(successRequest());
                 }
                 dispatch(dismissRequest());
             }else{
                dispatch(failureRequest());
             }
        },
        (error) =>{
            console.log(error);
        }
        );
    }
};