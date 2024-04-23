import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom"
import ResultCommunity from "./ResultCommunity";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";

export default function Result(){
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userInfo)
  const [typeinfo,setTypeInfo] = useState('');
  const handleGo = (path: string) => {
    navigate(path);
  }

  //타입리스트
  const typeInfoList :{[key:string]:string} = 
  {
    ["팡"] : "장군팡타입입니다",
    ["덕"] : "덕타입입니다",
    ["묘"] : "묘타입입니다",
    ["대표님"] : "대표님타입입니다"
  };
  useEffect(()=>{
    if(typeInfoList[user.result]){
      setTypeInfo(typeInfoList[user.result]);;
    }
  },[])

  console.log("isComplete"+user.isComplete);
  console.log("result"+user.result);

  if(user.isComplete === false) return <></>

  const handleRetest = (path:string)=>{
    navigate(path);
  }
  return(
    <div className="Common ResultContainer">
      <div className="Logout">
        <input type="button" value="로그아웃" onClick={()=>{handleGo('/login')}} />
      </div>
      <div className="ResultType">
        <h4>당신의 타입은 {user.result}타입</h4>
        <p>{typeinfo}</p>
        <p>{user.userName}님과 같은 타입의 사람으로는...<br></br> {user.sameType.join(', ')} 님이 있습니다.</p>
        <div>
          {/* <img src="/img/pang.png" className="ResultTypeImg"></img> */}
        </div>
      </div>
      <div className="ResultRestartBtn">
        <a onClick={() => handleRetest('/test')}>재시작</a>
      </div>
      <ResultCommunity/>
    </div>
  )
}
