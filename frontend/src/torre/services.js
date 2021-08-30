
import serverApi from '../common/fetch';

export default {
	loadJobs(success, error){
		return serverApi.postFlat('/api/search/')(success, error);
	},
	user(username){
			return serverApi.flatGet('/api/users/'+username);
	}
}