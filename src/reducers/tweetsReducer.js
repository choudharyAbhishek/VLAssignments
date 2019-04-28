import { RECEIVE_TWEETS, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };

    case ADD_TWEET:
      const { tweet } = action;
      return {
        ...state,
        [action.tweet.id]: action.tweet
      };

    default:
      return state;
  }
}
