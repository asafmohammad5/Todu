import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => ({
  errors: state.errors.session,
  formType: 'Signup',
  webLink: <Link to="/login">Log in</Link>
})

const mdp = dispatch => ({
  submitForm: (user) => dispatch(signup(user)),
});


export default connect(msp, mdp)(SessionForm)