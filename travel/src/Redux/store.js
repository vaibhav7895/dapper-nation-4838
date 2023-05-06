import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";


import {reducer as AuthReducer} from "../Redux/AuthReducer/reducer"
import {reducer as ProductReducer} from "../Redux/ProductReducer/reducer"
import { reducer as AdminReducer } from "./AdminReducer/reducer";
const rootReducer = combineReducers({
   AuthReducer,
   ProductReducer,
   AdminReducer 
  });
  
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




  export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

