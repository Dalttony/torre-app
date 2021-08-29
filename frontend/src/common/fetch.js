import axios from 'axios';
axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname;
if(document.getElementsByName("csrfmiddlewaretoken") != undefined){
	//	axios.defaults.headers.post['X-CSRFToken'] = document.getElementsByName("csrfmiddlewaretoken")[0].value;
}
const POST_HEADERS = {
	method: "POST",
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
		"X-CSRFToken": "",
	},
	credentials: "include"
	
}

const GET_HEADERS = {
	method: "GET", 
	headers: {
		"Accept": "application/json",
		"Content-Type":"application/json",
		"X-Requested-With": "XMLHttpRequest",
	},
	credentials: "include"
}	

export default {
	post(module){
			return (data) =>
					 (success, error) => {
					 	axios.post(module, data, POST_HEADERS)
					 		.then(success)
					 		.catch(error);
					 };
	},
	postFlat(module){
		return (success, error) => {	
					if( document.getElementsByName("csrfmiddlewaretoken") != null){
						//POST_HEADERS["headers"]["X-CSRFToken"] = document.getElementsByName("csrfmiddlewaretoken")[0].value;
					}
					axios.post(module, POST_HEADERS)
						 .then(success)
						 .catch(error);
			 };
	},
	postFile(module){
			return (data) =>
					 (success, error) => {
					 	axios.post(module, data, POST_HEADERS_WITH_FILE)
					 		.then(success)
					 		.catch(error);
					 };
	},
	get(module){
			return (data) =>
					 (success, error) => {
					 		axios.get(module, {
					 				params: {...data}
					 			}, GET_HEADERS)
					 			.then(success)
					 			.catch(error);
					 };
	},
	flatGet(module){
		return  (success, error) => { 
			axios.get(module, GET_HEADERS)
				.then(success)
				.catch(error);
		
		};
	},
	parallel(requests){
		return (success, error) => axios.all(requests)
				.then(axios.spread(success))
				.catch(error);
	}
}