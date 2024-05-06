import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";
import TopBar from "./TopBar";
import "./Question.style.css";

export default function Question(props:{onComplete(userKey:string,answer:number,isRetest:boolean):void}){
  const user = useSelector((state: RootState) => state.userInfo)
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<string[]>([]);
  const [answerCount, setAnswerCount] = useState(0);
  const {pathname} = useLocation();
  const [isRetest,setisRetest] = useState(false);
  const [start,setStart] = useState(false);

  //질문리스트
  const questionList = [
    {
      q: ["일에 있어 무엇이든 실행을 했으면 결과물이 나와야 한다고 생각한다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["업무에 있어서 꼼꼼하고 체계적으로 업무를 진행한다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["내가 원인이 되어 어떤 프로젝트가 진행이 안되면 상상 이상으로 스트레스를 많이 받는다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["문제에 봉착했을때, 기존에 쌓아두었던 관계를 통해 문제 해결을 한다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["무언가에 결심이 생기면 빠르게 일을 만들어내고 추진한다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["나의 일이 다른 사람의 업무에 긍정적인 영향을 주고 도움이 되는 것에 기쁨을 느낀다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["같이 일하는 사람들과 합심하여 좋은 시너지를 내는 것이 중요하다고 생각한다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    },
    {
      q: ["업무상의 장애물을 돌파해냈을 때 기운을 얻는다."],
      a:[
        {type:'A', score : 1, text :'매우 그렇지 않다'},
        {type:'B', score : 2, text :'그렇지 않다.'},
        {type:'C', score : 3, text :'그렇다.'},
        {type:'D', score : 4, text :'매우 그렇다.'}
        ]
    }
  ]

  useEffect(() => {
    if(user.isComplete){
      setisRetest(true);
    }

    //answer 배열길이 == questionList 배열길이 같으면 결과값 넘기기
    if(answer.length === questionList.length) {
      props.onComplete(user.userkey,answerCount,isRetest)
    }
  }, [answer])

  //다음질문으로 넘어가는 함수
  const nextQuestion = (key : number ,answerScore:number,answerType:string)=>{   
    setAnswerCount(answerCount+answerScore);
    setAnswer((prev) => [...prev, answerType]) 
  }
  console.log("answer"+[answer])
  console.log("합계"+answerCount)

  return(
    <div className="QuestionPage Common">
      {
        !start&&<div className="startBtn">
          <a onClick={() =>setStart(true)} className="">시작하기</a>
        </div>
      }
      {start&&questionList.map((question,qidx)=>(
        answer.length === qidx &&(
          <div key={qidx} className="QuestionBox">
            <div className="QuestionContainer">{question.q}</div>
            <div className="AnswerContainer">
            {question.a.map((answer,aidx)=>(
              <div className="Answer"> <input className="AnswerBtn" type="button" key={aidx} value={answer.text} onClick={()=>nextQuestion(aidx, answer.score, answer.type)} /></div>
            ))}
            </div>            
          </div>
        )
      ))}
      <div className="bottomImg">
        <img src="/img/kwjmb.png"/>
      </div>
    </div>
  )
}