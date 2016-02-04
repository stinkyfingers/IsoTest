import dispatcher from '../dispatchers/App';

class PeopleActions {
	get(){
		return {};
	}
	set(number){
		console.log(number)
		return number;
	}
}

export default dispatcher.createActions(PeopleActions);