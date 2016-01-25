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
import s from './LoginPage.scss';

const title = 'Log In';

class LoginPage extends Component {
  constructor(){
    super();
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  submit(event){
    console.log(this.state);
    fetch('http://localhost:8080/user', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
      });
  }

  inputChange(event){
    console.log(event.target.name);
    var field = event.target.name;
    if (field === 'email'){
      this.setState({email: event.target.value});
    }
    if (field === 'password'){
      this.setState({password: event.target.value});
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <label for="email">Email: </label>
          <input type="text" name="email" onChange={this.inputChange}/>
          <label for="password">Password: </label>
          <input type="text" name="password" onChange={this.inputChange}/>
          <button name="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }

}

export default withStyles(LoginPage, s);
