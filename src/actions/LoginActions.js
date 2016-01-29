import dispatcher from '../dispatchers/App';

class LoginActions {
	login(email, password){
		return {email, password};
	}
}

export default dispatcher.createActions(LoginActions);