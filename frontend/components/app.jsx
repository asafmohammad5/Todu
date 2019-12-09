import React from 'react';
import {Link, Switch, Route} from "react-router-dom";

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/auth_protected';
import Heading from "./heading/heading_container";
import BoardIndex from './board/board_index_container';
import MainPage from './main_page/main_page_container';
import BoardShow from './board/board_show_container';
import Modal from './board/modal_container';


const App = () => (
  <div className="div">
    <Route path="/" component={Heading} />
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/boards" component={BoardIndex} />
      <Route exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/boards/:boardId" component={BoardShow} />
    </Switch>        
  </div>
)

export default App;