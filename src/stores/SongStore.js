import fetch from '../core/fetch';
import events from 'events';
import dispatcher from '../dispatchers/App';
import SongActions from '../actions/SongActions';
const EventEmitter = events.EventEmitter;


class SongStore extends EventEmitter{
	constructor(){
		super();
		this.state = {
			songs: ['test']
		};
		
		this.bindListeners({
			get: SongActions.get,
		});
		this.get();
	}

 	async get (){
 		try{
			const resp = fetch('http://localhost:8080/', {
				method: 'GET'
			});
			this.setState({
				songs: await resp,
			});
		}catch(err){
			console.log(err);
		}
 	}

}

export default dispatcher.createStore(SongStore, 'SongStore');
