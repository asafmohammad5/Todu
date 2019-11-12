import React from 'react';
import {Link, Switch, Route} from "react-router-dom";

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute} from '../util/auth_protected';

const App = () => (
  <div>
    <header>  
      <h1>Todu!</h1>
    </header>
    
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
)

export default App;