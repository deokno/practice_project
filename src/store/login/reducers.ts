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
      return { ...action.payload }
    }
    case '@user/updateUser': {
      return { ...state, ...action.payload }
    }
    case '@user/logoutUser':{
      //return { ...state, initialState }
      //const payload = initialState
      return {
        isLogin:false,
        userName:'',
        isComplete:false,
        result:'',
        sameType:[],
        userkey:''
      }
    }
  }
  return state;
}