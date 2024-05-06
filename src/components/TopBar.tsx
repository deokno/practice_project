import React, { useEffect, useState } from 'react';
import { RootState } from "../store/useStore";
import {useDispatch, useSelector} from 'react-redux';       
import {useNavigate} from "react-router-dom"
import { logoutUser, setUser } from '../store/login';
import * as loginAction from '../store/login/actions'
export default function TopBar(){
  const dispatch = useDispatch();
  const[loginBtn,setLoginBtn]=useState('로그인')
  const user = useSelector((state: RootState) => state.userInfo)
  const navigate = useNavigate();
  const handleGo = (path: string) => {
    dispatch(loginAction.logoutUser())
    console.log(user);
    navigate(path);
  }
useEffect(()=>{
  if(user.isLogin){
    setLoginBtn('로그아웃');
  }else{
    setLoginBtn('메인페이지');
  }
},[user])
  return(
  <div className="topBtnContainer">
    <input type="button" className="topMainBtn"value={loginBtn}  onClick={()=>{handleGo('/main')}} />
  </div>
  )
}
