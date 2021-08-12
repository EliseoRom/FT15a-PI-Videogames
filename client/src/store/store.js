import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from '../Reducer/reducer';

export const store = createStore(
  rootReducer,
 composeWithDevTools (applyMiddleware(thunk)));

  
  // extencion de Redux para ver los cambios en la app
;



export default store;