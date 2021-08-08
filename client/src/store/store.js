import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from '../Reducer/reducer';

export const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
  applyMiddleware(thunk)
);
