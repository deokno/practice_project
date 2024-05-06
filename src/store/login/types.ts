import { Action } from "redux";

export interface UserInfo {
  isLogin:boolean, //로그인 여부
  userName:string,
  isComplete: boolean; // 테스트 진행 여부
  result: string; // 테스트 결과 값
  sameType: string[]; // 사용자와 비슷한 유저 이름
  userkey :string; //사용자의 유저키
}

export type SetUser = Action<'@user/setUser'> &{
  payload: UserInfo
}
export type UpdateUser = Action<'@user/updateUser'> &{
  payload: {
  isComplete?: boolean; // 테스트 진행 여부    
  result?: string; // 테스트 결과 값
  sameType?: string[]; // 사용자와 비슷한 유저 이름
  }
}
export type LogoutUser = Action<'@user/logoutUser'>;

export type Actions = SetUser | UpdateUser | LogoutUser
