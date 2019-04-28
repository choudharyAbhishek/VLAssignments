import { showLoading, hideLoading } from "react-redux-loading";
import { saveTweet } from "../middleware/tweetsApi";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
    return {
      type: RECEIVE_TWEETS,
      tweets
    };
  }

  function addTweet(tweet) {
    return {
      type: ADD_TWEET,
      tweet
    };
  }

  export function handleAddTweet(text) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());
      return saveTweet({
        text,
        author: authedUser
      })
        .then(tweet => dispatch(addTweet(tweet)))
        .then(() => dispatch(hideLoading()));
    };
  }
