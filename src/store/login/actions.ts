import { SetUser, UserInfo } from "./types";

export const setUser = (payload: UserInfo): SetUser => {
  return {
    type: '@user/setUser',
    payload
  }
}