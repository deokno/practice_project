import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


function Main(){

  const navigate = useNavigate();


  const handleGo = (path: string) => {
    navigate(path);
  }

  return (
    <div>
      <a onClick={() => handleGo('/join')}>회원가입</a>
      <a onClick={() => handleGo('/login')}>로그인</a>
    </div>
  )
}

export default Main;