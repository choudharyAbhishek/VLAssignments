import thunk from "redux-thunk";
import logger from "./myLogger";

import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
