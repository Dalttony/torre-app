
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
            if (response.status = 200){
                dispatch({type:TYPE.SET_DATA_RESULT, payload:{jobs:response.data.data.results}});
            }else{
                //something wrong happen
            }
        },
        (error) =>{
            console.log(error);
        }
        );
    }
};

export const getUser = (username) => {
    return (dispatch, getState) => {
        dispatch(sendRequest());

        service.user(username)( (response)=>{
            console.log(response);
        },
        (error) =>{
            console.log(error);
        }
        );
    }
};