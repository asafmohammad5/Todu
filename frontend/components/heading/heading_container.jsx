import { connect } from 'react-redux';

import Heading from './heading';

const msp = (state, ownProps) => {
  return {
    path: ownProps.location.pathname,
    ownProps
  }
};


export default connect(msp, null)(Heading);