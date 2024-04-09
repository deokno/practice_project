import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function Result(){
  const navigate = useNavigate();

  // const handleRetest =(path: string, props: {
  //   isComplete(value:boolean):void
  // })=>{
  //   props.isComplete(false);
  //   navigate(path);
  // }

  const handleRetest = (path:string)=>{
    navigate(path);
  }
  return(
    <div>
      결과페이지
      <div>
        <a onClick={() => handleRetest('/test')}>재시작</a>
      </div>
    </div>
  )
}
