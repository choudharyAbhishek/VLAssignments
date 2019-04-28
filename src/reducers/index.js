import { combineReducers } from "redux";

import authedUser from "./authedUser";
import tweetsReducer from "./tweetsReducer";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authedUser,
    tweetsReducer,
    loadingBar: loadingBarReducer
});
