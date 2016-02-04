import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PeoplePage.scss';
import PeopleStore from '../../stores/PeopleStore';
import PeopleActions from '../../actions/PeopleActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Link from '../Link';

const title = 'People';

class PeoplePage extends Component {

  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  //required for use of connectToStores
  static getPropsFromStores () {
    const people = PeopleStore.getState();
    return people;
  }

  //required for use of connectToStores
  static getStores (){
    return [PeopleStore]
  }

  showPeople(){
    const listItems = [];

    this.props.people.map((user, i) => {
      const firstname = user.user.name.first;
      listItems.push(<li key={i}>{firstname}</li>);
    });
 
    return listItems;
  }

  createSelect(){
    const numbers = [1,2,3,4,5,10];
    const choices = [];
    numbers.map((number, i) =>{
      choices.push(<option key={i} value={number}>{number}</option>);
    });

    return choices;
  }

  handleChange(event){
    console.log(event.target.value);
    PeopleActions.set(event.target.value)
    // const people = PeopleStore.set(event.target.value);
    // console.log(people);
    // return this.setState(this.PeopleStore)
  }

  render() {
    return (
      <div>People...
        <ul>{this.showPeople()}</ul>
        <div><select name="numbers" onChange={this.handleChange}>{this.createSelect()}</select></div>
      </div>
    );
  }

}

export default withStyles(connectToStores(PeoplePage), s);
