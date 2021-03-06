import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    path: ownProps.location.pathname,
    ownProps
  }
};

const mdp= dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);


