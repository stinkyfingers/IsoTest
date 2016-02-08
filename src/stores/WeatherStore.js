import fetch from '../core/fetch';
import events from 'events';
import dispatcher from '../dispatchers/App';
import WeatherActions from '../actions/WeatherActions';
const EventEmitter = events.EventEmitter;


class WeatherStore extends EventEmitter{
	constructor(){
		super();
		this.state = {
			location: {
				city: 'Eau Claire',
				countryCode: '1'
			},
			weather: {}
		};
		
		this.bindListeners({
			get: WeatherActions.get,
		});
		this.get(this.state.location);
	}

 	async get (location){
 		const key = 'f056e9153296c69f508cbdd83e9eab20';
 		const url = 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + key + '&q='  + location.city + ',' + location.countryCode;
 		try{ 
			const resp = await fetch(url,{
				method: 'GET'
			});
			const res = await resp.json();
			this.setState({
				weather: res
			});
	
		}catch(err){
			console.log(err);
		}
 	}

}

export default dispatcher.createStore(WeatherStore, 'WeatherStore');
