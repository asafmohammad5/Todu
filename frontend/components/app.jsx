import React from 'react';
import {Link, Switch, Route} from "react-router-dom";

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute} from '../util/auth_protected';
import Heading from "./heading/heading_container"

const App = () => (
  <div className="div">
    <Route path="/" component={Heading} />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

      <div className="main-page-all">
        <div className="main-page-right"></div>
        <div className="main-page-middle"></div>
        <div className="main-page-left"></div>
      </div>
  </div>
)

export default App;