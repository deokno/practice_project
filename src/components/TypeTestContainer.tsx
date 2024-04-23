import React, { useState } from 'react';
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
  //로그인
  const handleLogin = async (userName: string,password:string,email:string) => {
    console.log(email);
    console.log(userName);
    console.log(Response);
     await userApi.login({ email,password}).then((result) => {
      console.log(email);
      if(result.status==="SUCCESS") {
        // result api 호출
        const userInfo = {
          isLogin:true,
          userName:result.userName,
          isComplete: result.isComplete,
          result: result.resultType,
          sameType: result.sameType,
          userkey: result.userKey
        }
        console.log("리스폰스"+result);
        dispatch(setUser(userInfo));
        navigate("/");
        console.log('3')
      } else {
        alert('계정이 존재하지 않습니다.')
      }
    });
     
    //백엔드 로그인 성공 값
    // if(true) {
    //   const userInfo = {
    //     isLogin :true,
    //     userName:'앙팡이',
    //     isComplete: false,
    //     result: '팡',
    //     sameType: ['경민,짱구,훈이,유리,액션가면'],
    //   } 
    //   dispatch(setUser(userInfo));
    //   //로그인 성공&&isComplete false면 시작하기 버튼 show
    //   //로그인성공&&isComplete true면 Result페이지
    //   navigate('/');
    // }
  }

  //회원가입
  const handleJoin = async(userName: string,password:string, email:string)=>{
    console.log(email);
    console.log(userName);   
    // 이메일 중복체크 성공여부 check
    const emailCheck = await joinApi.checkJoin({ email });
    console.log("emailCheck"+emailCheck);
    if(emailCheck.status==="SUCCESS"){
      //중복체크 통과 성공
      const joinResult = await joinApi.joinUser({userName,email,password});
      console.log("joinResult"+joinResult);
      if(joinResult.status){
        alert('계정생성 성공!')
        //로그인페이지로 이동
        navigate("/login")
      }else{
        alert('계정생성 실패!')
      }
    }else{
      alert("이미 존재하는 이메일입니다.");
      //이미 존재하는 이메일이니 로그인페이지로 이동
      navigate("/login")
    }
  }
  //테스트 완료
  // const handleComplete=(answer:number)=>{
  //   //첫 제출시
  //   //결과 insert api 호출
  //   if(!user.isComplete){
  //     const response = {
  //       isLogin:true,
  //       userName:user.userName,
  //       isComplete:true,
  //       result: '팡',
  //       sameType: ['경민,짱구,훈이,유리,액션가면'],
  //     }
  //     dispatch(setUser(response));
  //   }else{
  //     //이미 테스트한사람은 아무리 재시작해도 똑같은 값이 나오도록
  //     navigate('/');
  //   }
  // }
  //테스트 완료
  const handleComplete = async(userKey:string,score:number,isRetest:boolean)=>{
    console.log("재시작여부"+isRetest);
    if(!isRetest){
      console.log("첫테스트");
      let typeName="" ;
      const getType = await typeTestApi.getType({userKey,score});
      if(getType.status==="SUCCESS"){
        // switch(getType.resultType){
        //   case "pang":
        //     typeName="팡"
        //     break;
        //   case "nkm":
        //     typeName= "노경민";
        //     break;
        //   case "jdn":
        //     typeName="조덕노";
        //     break;
        //   case "kmh":
        //     typeName="강명호대표님";
        //     break;
          
        // }

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

       
        dispatch(updateUser({result: getType.resultType,}));
      }
    }
    navigate("/")
  }
  return (
      <Routes>
        {
          //사용자정보가 없으면 Main으로 이동
          !user.isLogin&&<Route path="/" element={<Main/>}></Route>
          //user.result === "" && !user.isLogin&&<Route path="/" element={<Main/>}></Route>

        }
        {
          //테스트완료 하고, 결과가 존재하면 결과페이지로 이동
          user.isComplete && user.result &&
          <Route path="/" element={<Result />}></Route>
        }
        {
          //테스트미완료 하고, 결과값이 없으면 질문 페이지로 이동
          (!user.isComplete && user.result === "")? 
            (<Route path="/" element={<Question onComplete={handleComplete}/>}></Route>) 
          :
          (
            //재시작 버튼을 눌렀을때
            <Route path="test" element={<Question onComplete={handleComplete}/>}></Route>
          )
        }
        <Route path="/login" element={<Login onTemp={handleLogin} />}/>
        <Route path="/join" element={<Login onTemp={handleJoin} />}/>
      </Routes>
  );
}


export default TypeTestContainer;
