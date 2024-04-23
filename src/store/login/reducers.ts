import * as User from "./types"

const initialState: User.UserInfo = {
  isLogin:false,
  userName:'',
  isComplete: false,
  result: '',
  sameType: [],
  userkey:''
}

export const reducer = (state: User.UserInfo = initialState, action:User.Actions) => {
  switch(action.type) {
    case '@user/setUser': {
      console.log('1.5 ', action.payload)
      return { ...action.payload }
    }
    case '@user/updateUser': {
      return { ...state, ...action.payload }
    }
  }
  return state;
}