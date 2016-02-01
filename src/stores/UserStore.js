import fetch from '../core/fetch';
import events from 'events';
import dispatcher from '../Dispatchers/App';
import UserActions from '../actions/UserActions';
const EventEmitter = events.EventEmitter;


class UserStore extends EventEmitter{
	constructor(){
		super();
		this.get();
		this.bindListeners({
			get: UserActions.get,
		});
		this.state = {
			user: {}
		};
	}

 	async get (){
 		const resp = localStorage.getItem('user')
 		this.setState({
 			user: await JSON.parse(resp)
 		});
 	}

}

export default dispatcher.createStore(UserStore, 'UserStore');
