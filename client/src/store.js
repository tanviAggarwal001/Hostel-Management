// src/store.js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// Prefer the Redux DevTools compose, but fallback to redux.compose.
// Guard 'window' so this works in non-browser environments too.
const composeEnhancers =
  (typeof window !== "undefined" &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__)) ||
  compose;

// If window.__REDUX_DEVTOOLS_EXTENSION__ is present, it is a function that returns an enhancer.
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is a compose replacement that is safest to use.
// The fallback `compose` makes sure we never pass undefined into compose.

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
