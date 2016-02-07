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

		this.bindAction(PeopleActions.set, this.set)
	}

 	async get (number){
 		try{ 
			const resp = await fetch('http://randomuser.me/api/?results=' + number,{
				method: 'GET'
			});
			const res = await resp.json();
			this.setState({
				people: res.results,
				number: number
			});
		}catch(err){
			console.log(err);
		}
 	}

 	set (number){
 		this.setState({number});
 		this.get(number)
 	}

}

export default dispatcher.createStore(PeopleStore, 'PeopleStore');
