import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions.js';
import Tweets from './tweets.js';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);