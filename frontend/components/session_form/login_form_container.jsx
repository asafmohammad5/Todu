import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => ({ 
  errors: state.errors.session,
  formType: 'Log in',
  webLink: <Link to="/signup">Sign up</Link>
});

const mdp = dispatch => ({
  submitForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);