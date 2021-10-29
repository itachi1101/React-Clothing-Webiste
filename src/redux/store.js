import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// middle ware is expecting an array 
const middlewares=[logger]
const store=createStore(rootReducer,applyMiddleware(...middlewares))
export default store