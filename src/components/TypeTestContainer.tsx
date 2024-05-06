import React, { useEffect, useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';       
import { Route, Routes, useNavigate ,useLocation} from "react-router-dom"
import '../App.css';
import "./Project.style.css";
import { RootState } from '../store/useStore';
import { setUser, updateUser } from '../store/login';
import Question from './Question';
import Result from './Result';
import Main from './Main';
import Login from './Login';
import axios from 'axios';
import userApi from '../apis/user';
import joinApi from '../apis/joinUser';
import typeTestApi from '../apis/typeTest';
function TypeTestContainer() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo); 
  const navigate = useNavigate();
  const [userinfo, setuserInfo] = useState(user);
  const [resultType, setResultType] = useState([]);
  useEffect(() => {
    // 비회원
    if(!user.isLogin)
        navigate('/main')
    else {
      // 회원
      if(user.isComplete && user.result){ 
        navigate('/result')
      } 
      else 
       navigate('/test')
    }
  }, [user])
  //로그인
  const handleLogin = async (userName: string,password:string,email:string) => {
    console.log(email);
    console.log(userName);
    console.log(Response);
     await userApi.login({ email,password}).then((result) => {
      console.log(email);
      if(result.status==="SUCCESS") {
        // userInfo Setting
        const userInfo = {
          isLogin:true,
          userName:result.userName,
          isComplete: result.isComplete,
          result: result.resultType,
          sameType: result.sameType,
          userkey: result.userKey
        }
        dispatch(setUser(userInfo));
      } else {
        alert('계정이 존재하지 않습니다.')
      }
    });
  }

  //회원가입
  const handleJoin = async(userName: string,password:string, email:string)=>{  
    // 이메일 중복체크 성공여부 check
    const emailCheck = await joinApi.checkJoin({ email });
    if(emailCheck.status==="SUCCESS"){
      //중복체크 통과 성공
      const joinResult = await joinApi.joinUser({userName,email,password});
      if(joinResult.status){
        alert('계정생성 성공!')
        //메인 페이지로 이동
        navigate("/main")
      }else{
        alert('계정생성 실패!')
      }
    }else{
      alert("이미 존재하는 이메일입니다.");
    }
  }

  //테스트 완료 (userKey, score, isRetest:재시작여부)
  const handleComplete = async(userKey:string,score:number,isRetest:boolean)=>{
    if(!isRetest){
      let typeName="" ;
      const getType = await typeTestApi.getType({userKey,score});
      if(getType.status==="SUCCESS"){
        // const userInfo = {
        //   isLogin:true,
        //   userName: user.userName,
        //   isComplete: true,
        //   result: getType.resultType,
        //   //result :typeName,
        //   sameType: getType.sameType,
        //   userkey: user.userkey
        // }
        // console.log(userInfo);
        // dispatch(setUser(userInfo));
        dispatch(updateUser({isComplete:true,result: getType.resultType,sameType:getType.sameType}));
      }
    }else{
      dispatch(updateUser({isComplete:true}));
    }
    navigate("/")
  }
  return (
      <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/result" element={<Result />}/>
        <Route path="/test" element={<Question onComplete={handleComplete}/>}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />}/>
        <Route path="/join" element={<Login onLogin={handleJoin} />}/>
      </Routes>
  );
}
export default TypeTestContainer;
