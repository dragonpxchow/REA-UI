import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension";
//import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
