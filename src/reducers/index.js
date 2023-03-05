import { codeReducer } from "./code";
import { userReducer } from "./user";
import { usersReducer } from "./users";
import { dashboardReducer } from "./showDashboard";
import {combineReducers} from "redux"

export const reducers  = combineReducers({
    users:usersReducer,
    user:userReducer,
    code:codeReducer,
    dashboardSate:dashboardReducer
})