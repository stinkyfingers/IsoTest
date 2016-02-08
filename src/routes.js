/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import PeoplePage from './components/PeoplePage';
import WeatherPage from './components/WeatherPage';
import SongStore from './stores/SongStore';
import UserStore from './stores/UserStore';
import LoginStore from './stores/LoginStore';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    UserStore.getState();
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/loginuser', async () => {
    LoginUser.setState();
  });

  on('/people', async () => <PeoplePage />);

  on('/register', async () => <RegisterPage />);

  on('/weather', async () => <WeatherPage />);

  on('*', async (state) => {
    const response = await fetch(`/api/content?path=${state.path}`);
    const content = await response.json();
    return response.ok && content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
