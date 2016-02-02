/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';
import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from '../../stores/UserStore';


const title = 'Contact Us';

class ContactPage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  //required for use of connectToStores
  static getPropsFromStores () {
    return UserStore.getState();
  }

  //required for use of connectToStores
  static getStores (){
    return [UserStore]
  }

  displayUser () {
    return(<p>{this.props.user.name}</p>)
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <div>{this.displayUser()}</div>
        </div>
      </div>
    );
  }

}

export default withStyles(connectToStores(ContactPage), s);
