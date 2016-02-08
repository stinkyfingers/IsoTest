import dispatcher from '../dispatchers/App';

class WeatherActions {
	constructor(){
		this.generateActions('get')
	}
}

export default dispatcher.createActions(WeatherActions);