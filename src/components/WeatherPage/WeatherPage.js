import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Weather.scss';
import WeatherStore from '../../stores/WeatherStore';
import WeatherActions from '../../actions/WeatherActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Link from '../Link';

const title = 'Weather';

class WeatherPage extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  //required for use of connectToStores
  static getPropsFromStores () {
    const weather = WeatherStore.getState();
    return weather;
  }

  //required for use of connectToStores
  static getStores (){
    return [WeatherStore]
  }

  createWeather(){
    console.log(this.props.weather)
    const output = [];
    this.props.weather.list.map((moment, i) => {
      output.push(<li key={i}>Time: {moment.dt_txt}, Max Temp: {moment.main.temp_max}, Min Temp: {moment.main.temp_min}</li>)
    });
    return output;
  }

  render() {
    return (
      <div>Weather
        <ul>{this.createWeather()}</ul>
      </div>
    );
  }

}

export default withStyles(connectToStores(WeatherPage),s);
