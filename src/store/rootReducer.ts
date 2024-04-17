import { combineReducers } from "redux";
import * as UserInfo from "./login";

export const rootReducer = combineReducers({
  userInfo : UserInfo.reducer,
})