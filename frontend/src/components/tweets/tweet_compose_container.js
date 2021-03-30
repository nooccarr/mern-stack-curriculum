import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions.js';
import TweetCompose from './tweet_compose.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);