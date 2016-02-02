import fetch from '../core/fetch';
import events from 'events';
import dispatcher from '../dispatchers/App';
import LoginActions from '../actions/LoginActions';
const EventEmitter = events.EventEmitter;


class LoginStore extends EventEmitter{
	constructor(){
		super();
		this.bindListeners({
			handleLogin: LoginActions.login,
		});
		// this.handleLogin();
	}

 	async handleLogin (email, password){
		const resp = fetch('http://localhost:8080/user', {
			method: 'POST',
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		});

		this.setState({
			user: await resp.json(),
		});
 	}

}

export default dispatcher.createStore(LoginStore, 'LoginStore');

// import EventEmitter from 'events';
// import fetch from '../core/fetch';
// import dispatcher from '../dispatchers/AppDispatcher';
// import CategoryActions from '../actions/LoginActions';

// class CategoryStore extends EventEmitter {

//     constructor() {
//         super();
//         this.bindListeners({
//             getAll: CategoryActions.getAll,
//         });

//         this.state = {
//             categories: [],
//         };

//         this.getAll();
//     }

//     async getAll() {
//         const catResponse = await fetch('https://api.curtmfg.com/v3/category?brandID=3&key=9300f7bc-2ca6-11e4-8758-42010af0fd79');

//         this.setState({
//             categories: await catResponse.json(),
//         });
//     }
// }

// export default dispatcher.createStore(CategoryStore, 'CategoryStore');
