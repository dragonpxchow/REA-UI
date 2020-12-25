import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

// create store from all reducers
const middlewares = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
