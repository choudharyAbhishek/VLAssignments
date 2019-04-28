import React, { Component } from "react";
import { connect } from "react-redux";
import avatar from "../Images/avatar.png";
import { formatDate } from "../middleware/tweetsApi";

import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

class Tweet extends Component {
  state = {
    likes: 0,
    hasLiked: false
  };

  handleLike = e => {
    this.setState(() => ({
      hasLiked: !this.state.hasLiked,
      likes: !this.state.hasLiked ? this.state.likes + 1 : this.state.likes - 1
    }));
  };
  render() {
    const { tweet } = this.props;
    const { likes, hasLiked } = this.state;
    if (tweet === null) {
      return <p>This tweet doesn't exist</p>;
    }
    return (
      <div className="tweet">
        <div className="tweet-info">
          <div>
            <div className="tweetHeader">
              <img
                src={avatar}
                alt={`Avatar of ${tweet.author}`}
                className="avatar"
              />
              <span className="author">{tweet.author}</span>
            </div>
            <div className="tweetInfo">
              <div className="tweetText">{tweet.text}</div>
              <div className="timeStamp">{formatDate(tweet.timestamp)} </div>
            </div>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes} </span>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, tweetsReducer }, { id }) {
  const tweet_a = tweetsReducer[id];

  return {
    name: authedUser,
    tweet: tweet_a
  };
}

export default connect(mapStateToProps)(Tweet);
