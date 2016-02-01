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
import UserStore from '../../stores/UserStore';


const title = 'Contact Us';

class ContactPage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }


  getPropsFromStores () {
    return UserStore.getState();
  }



  getStores (){
    return [UserStore]
  }

 

  render() {
    console.log(this.props)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default withStyles(ContactPage, s);
