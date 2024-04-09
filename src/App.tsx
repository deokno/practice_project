import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Result from './components/Result';
import Question from './components/Question';
function App() {
  
  const [user, setUser] = useState<{
    userName: string
    isComplete: boolean
  } | undefined>({
    //undefined
    //임시
    userName:"",
    isComplete:false
  });

  const navigate = useNavigate();
  return (
    //<>
    <Routes>
     
      {
        //사용자정보가 없으면 Main으로 이동
        !user ? <Route path="/" element={<Main/>}></Route> : user.isComplete ? 
        <Route path="/result" element={<Result/>}></Route>: <Route path="/test" element={<Question/>}></Route>
        //<></>
      //  user.isComplete ? <>결과</> : <>테스트</>
      }
      {
       
      }
       <Route path="/login" element={<Login/>}/>
       <Route path="/join" element={<Login/>}/>
    </Routes>
    //</>
  );
}

export default App;
