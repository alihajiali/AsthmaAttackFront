import {reducers} from "../reducers/index"
import {legacy_createStore as createStore ,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { getAllUsers } from "../actions/users";
export const store = createStore(reducers , applyMiddleware(thunk));
store.dispatch(getAllUsers())