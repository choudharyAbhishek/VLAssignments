import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { handleAddTweet } from "../actions/tweets";
import { connect } from "react-redux";

class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  };
  handleChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddTweet(text));
    this.setState(() => ({
      text: "",
      toHome: true
    }));
  };
  render() {
    const { text, toHome } = this.state;
    const tweetLeft = 180 - text.length;
    const currentUser = this.props.user;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3 className="heading">{"Hey "+ currentUser + "! You can tweet here"}</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder={"What's new "}
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={180}
          />
          {text !== "" && (
            <div className="tweet-length">
              {tweetLeft} {" charachters left"}
            </div>
          )}
          <button className="btn" type="submit" disabled={text === ""}>
            Tweet
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    user : authedUser
  };
}

export default connect(mapStateToProps)(NewTweet);
