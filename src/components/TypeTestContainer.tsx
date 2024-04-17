import React, { useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';       
import { Route, Routes, useNavigate ,useLocation} from "react-router-dom"
import '../App.css';
import "./Project.style.css";
import { RootState } from '../store/useStore';
import { setUser } from '../store/login';
import Question from './Question';
import Result from './Result';
import Main from './Main';
import Login from './Login';
import axios from 'axios';
import userApi from '../apis/user';




function TypeTestContainer() {
   const location = useLocation();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo); 
  const navigate = useNavigate();
  const [userinfo, setuserInfo] = useState(user);
  const [resultType, setResultType] = useState([]);
  const handleTempLogin = async (userName: string, email:string,gu:string) => {
    console.log(email);
    console.log(userName);
    console.log(gu);
    //  await userApi.login({ userName, email,gu }).then((result) => {
    //   if(result.isComplete) {
    //     // result api 호출
    //     const response = {
    //       isComplete: true,
    //       result: 'a',
    //       sameType: ['경민님'],
    //     }
    //     dispatch(setUser(response));
    //     navigate('/');
    //     console.log('3')
    //   } else {
    //     alert('로그인 안됨')
    //   }
    // });
     
    // 백엔드 로그인 성공 값
    
    if(true) {
      const userInfo = {
        userName:'앙팡이',
        isComplete: true,
        result: '팡',
        sameType: ['경민님'],
      }
      
      dispatch(setUser(userInfo));
      //setuserInfo(userInfo);
      navigate('/');
    }

  
  }

  //회원가입
  const handleJoin = (userName: string, email:string,gu:string)=>{
    console.log(email);
    console.log(userName);
    console.log(gu);
    
    const apireturn =  false;
    //회원가입 api 성공 return시
    if(apireturn) {
      console.log("회원가입성공");
      
    }else{
      alert('실패');
    }
  }
  const handleComplete=(answer:string[])=>{
    //첫 제출시
    //결과 insert api 호출
    if(!user.isComplete){

    }else{
      //이미 테스트한사람은 아무리 재시작해도 똑같은 값이 나오도록
      navigate('/');
    }
  }
  console.log(user);  

  return (
      <Routes>
        {
          //사용자정보가 없으면 Main으로 이동
          user.result === "" && <Route path="/" element={<Main/>}></Route>
        }
        {
          //테스트를 끝냈고, 결과가 존재하면 결과페이지로 이동
          user.isComplete && user.result &&
          <Route path="/" element={<Result />}></Route>
        }
        {
          //테스트를 끝내지 않았거나 결과값이 없으면 질문 페이지로 이동
          (!user.isComplete && user.result === "")? 
            (<Route path="/" element={<Question onComplete={handleComplete}/>}></Route>) 
          :
          (
            //재시작
            <Route path="test" element={<Question onComplete={handleComplete}/>}></Route>
          )
        }
        <Route path="/login" element={<Login onTemp={handleTempLogin} />}/>
        <Route path="/join" element={<Login onTemp={handleJoin} />}/>
      </Routes>
  );
}


export default TypeTestContainer;
