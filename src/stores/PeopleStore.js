import fetch from '../core/fetch';
import events from 'events';
import dispatcher from '../dispatchers/App';
import PeopleActions from '../actions/PeopleActions';
const EventEmitter = events.EventEmitter;


class PeopleStore extends EventEmitter{
	constructor(){
		super();
		this.state = {
			people: [],
			number: 1
		};
		
		this.bindListeners({
			get: PeopleActions.get,
		});
		this.get(this.state.number);
		// this.getSome();
		// this.number = 1;
	}

 	async get (number){
 		try{ 
			const resp = await fetch('http://randomuser.me/api/?results=' + number,{
				method: 'GET'
			});
			const res = await resp.json();
			this.setState({
				people: res.results,
			});
		}catch(err){
			console.log(err);
		}
 	}

 	// async getSome (number){
 	// 	try{ 
		// 	const resp = await fetch('http://randomuser.me/api/?results=' + number, {
		// 		method: 'GET'
		// 	});
		// 	const res = await resp.json();
		// 	this.setState({
		// 		people: res.results,
		// 	});
		// }catch(err){
		// 	console.log(err);
		// }
 	// }

}

export default dispatcher.createStore(PeopleStore, 'PeopleStore');
