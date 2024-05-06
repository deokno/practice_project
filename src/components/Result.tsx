import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom"
import ResultCommunity from "./ResultCommunity";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";
import TopBar from "./TopBar";

export default function Result(){
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userInfo)
  const [typeinfo,setTypeInfo] = useState('');
  const [typeImg,setTypeImg] = useState('');
  const handleGo = (path: string) => {
    navigate(path);
  }
  //타입리스트
  const typeInfoList :{[key:string]:{descript:string,imgpath:string}} = 
  {
    "장군팡":{
      descript: "목표달성을 위해 적극적이고 빠르게 행동하는 장군팡 타입입니다.",
      imgpath: "/img/pang2.png"
    },
    "조덕노":{
      descript: "직관적이고 객곽적인 자료를 토대로 효율적으로 일하는 유형인 조덕노 타입 입니다.",
      imgpath: "/img/duck.png"
    },
    "노경민":{
      descript: "일관적으로 업무수행을 지속하는 노경민 타입 입니다.",
      imgpath: "/img/km.png"
    },
    "강명호대표님":{
      descript: "뛰어난 성과와 완벽을 추구하는 대표님 타입 입니다.",
      imgpath: "/img/kmh.png"
    }
    // ["팡"] : "목표달성을 위해 적극적이고 빠르게 행동하는 장군팡 타입입니다.",
    // ["조덕노"] : "직관적이고 객곽적인 자료를 토대로 효율적으로 일하는 유형인 조덕노 타입 입니다.",
    // ["노경민"] : "일관적으로 업무수행을 지속하는 노경민 타입 입니다.",
    // ["강명호대표님"] : "뛰어난 성과와 완벽을 추구하는 대표님 타입 입니다."
  };
  useEffect(()=>{
    if(typeInfoList[user.result]){
      setTypeInfo(typeInfoList[user.result].descript);
      setTypeImg(typeInfoList[user.result].imgpath);
    }
  },[])

  if(user.isComplete === false) return <></>

  //재시작버튼
  const handleRetest = (path:string)=>{
    navigate(path);
  }
  return(
    <div className="Common ResultContainer">
      <TopBar/>
      <div className="ResultType">
        <h4>당신의 타입은 <br/>{user.result}타입</h4>
        <p>{typeinfo}</p>
        <div className="ResultTypeImg">
          <img src={typeImg}/>
        </div>
        <p>{user.userName}님과 같은 타입의 사람으로는...<br></br> {user.sameType.join(', ')} 님이 있습니다.</p>
        <div>
        </div>
      </div>
      <div className="ResultRestartBtn">
        <a onClick={() => handleRetest('/test')}>재시작</a>
      </div>
      <ResultCommunity/>
    </div>
  )
}
