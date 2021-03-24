import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page.js';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    {/* useful to have a nav bar that appears on every page */}
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path='/' component={MainPage} />
      {/* render components with forms that allows users to sign up or login */}
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;