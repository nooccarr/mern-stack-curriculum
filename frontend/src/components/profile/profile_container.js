import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions.js';
import Profile from './profile.js';

// pass down slice of state down as props
const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
  };
};

// pass down result of dispatching action(function) down as props
const mapDispatchToProps = dispatch => {
  return {
    fetchUserTweets: id => dispatch(fetchUserTweets(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);