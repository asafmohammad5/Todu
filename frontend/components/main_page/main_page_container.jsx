import { connect } from 'react-redux';
import React from 'react';
import MainPage from './main';

const msp = state => ({
  signedIn: Boolean(state.session.id)
})

export default connect(msp)(MainPage)