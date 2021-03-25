import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';

import NavBar from './navbar.js';

// build a container for navigation component

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);