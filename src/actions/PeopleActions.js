import dispatcher from '../dispatchers/App';

class PeopleActions {
	constructor(){
		this.generateActions('get','set')
	}
}

export default dispatcher.createActions(PeopleActions);