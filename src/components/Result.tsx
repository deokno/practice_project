import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom"
import ResultCommunity from "./ResultCommunity";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";

export default function Result(){
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userInfo)

  console.log("isComplete"+user.isComplete);
  console.log("result"+user.result);

  if(user.isComplete === false) return <></>

  const handleRetest = (path:string)=>{
    navigate(path);
  }
  return(
    <div className="Common ResultContainer">
      <div className="ResultType">
        <h4>당신의 타입은 {user.result}타입</h4>
        <p>{user.sameType.join(', ')}</p>
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
