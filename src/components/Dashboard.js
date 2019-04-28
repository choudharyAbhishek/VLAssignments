import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="heading">Timeline View</h3>
        <ul className="dashbord-list">
          {this.props.tweetsIds.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweetsReducer }) {
  return {
    tweetsIds: Object.keys(tweetsReducer).sort(
      //sorting from the newest to the oldest tweet
      //If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
      (a, b) => tweetsReducer[b].timestamp - tweetsReducer[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
