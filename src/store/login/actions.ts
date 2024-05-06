import { RootState } from "../useStore";
import { LogoutUser, SetUser, UpdateUser, UserInfo } from "./types";

export const setUser = (payload: UserInfo): SetUser => {
  return {
    type: '@user/setUser',
    payload
  }
}

export const updateUser = (payload: {
  isComplete?: boolean; // 테스트 진행 여부    
  result?: string; // 테스트 결과 값
  sameType?: string[]; // 사용자와 비슷한 유저 이름
}): UpdateUser => {
  return {
    type: '@user/updateUser',
    payload
  }
}
export const logoutUser = (): LogoutUser => {
  return {
    type: '@user/logoutUser'
  }
}