import { Action } from "redux";

export interface UserInfo {
  userName:string,
  isComplete: boolean; // 테스트 진행 여부
  result: string; // 테스트 결과 값
  sameType: string[]; // 사용자와 비슷한 유저 이름
}

export type SetUser = Action<'@user/setUser'> &{
  payload: UserInfo
}

export type Actions = SetUser
