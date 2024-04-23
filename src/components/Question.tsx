import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";
//import "./Question.style.css";

export default function Question(props:{onComplete(userKey:string,answer:number,isRetest:boolean):void}){
  const user = useSelector((state: RootState) => state.userInfo)
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<string[]>([]);
  const [answerCount, setAnswerCount] = useState(0);
  const {pathname} = useLocation();
  const [isRetest,setisRetest] = useState(false);

  //질문리스트
  const questionList = [
    {
      q: ["질문1"],
      a:[
        {type:'A', score : 1, text :'1-A'},
        {type:'B', score : 2, text :'1-B'},
        {type:'C', score : 3, text :'1-C'},
        {type:'D', score : 4, text :'1-D'}
        ]
    },
    {
      q: ["질문2"],
      a:[
        {type:'A', score : 1, text :'2-A'},
        {type:'B', score : 2, text :'2-B'},
        {type:'C', score : 3, text :'2-C'},
        {type:'D', score : 4, text :'2-D'}
        ]
    },
    {
      q: ["질문3"],
      a:[
        {type : 'A', score : 1, text :'3-A'},
        {type : 'B', score : 2, text :'3-B'},
        {type : 'C', score : 3, text :'3-C'},
        {type : 'D', score : 4, text :'3-D'}
        ]
    },
    {
      q: ["질문4"],
      a:[
        {type : 'A', score : 1, text :'4-A'},
        {type : 'B', score : 2, text :'4-B'},
        {type : 'C', score : 3, text :'4-C'},
        {type : 'D', score : 4, text :'4-D'}
        ]
    },
    {
      q: ["질문5"],
      a:[
        {type : 'A', score : 1, text :'5-A'},
        {type : 'B', score : 2, text :'5-B'},
        {type : 'C', score : 3, text :'5-C'},
        {type : 'D', score : 4, text :'5-D'}
        ]
    },
    {
      q: ["질문6"],
      a:[
        {type : 'A', score : 1, text :'6-A'},
        {type : 'B', score : 2, text :'6-B'},
        {type : 'C', score : 3, text :'6-C'},
        {type : 'D', score : 4, text :'6-D'}
        ]
    },
    {
      q: ["질문7"],
      a:[
        {type : 'A', score : 1, text :'7-A'},
        {type : 'B', score : 2, text :'7-B'},
        {type : 'C', score : 3, text :'7-C'},
        {type : 'D', score : 4, text :'7-D'}
        ]
    },
    {
      q: ["질문8"],
      a:[
        {type : 'A', score : 1, text :'8-A'},
        {type : 'B', score : 2, text :'8-B'},
        {type : 'C', score : 3, text :'8-C'},
        {type : 'D', score : 4, text :'8-D'}
        ]
    }
  ]

  useEffect(() => {
    if(pathname==="/test"){
      setisRetest(true);
    }
    console.log("answer"+answer)
    if(answer.length === questionList.length) {
      props.onComplete(user.userkey,answerCount,isRetest)
    }
  }, [answer])


  const nextQuestion = (key : number ,answerScore:number,answerType:string)=>{   
    setAnswerCount(answerCount+answerScore);
    setAnswer((prev) => [...prev, answerType]) 
  }
  console.log("answer"+[answer])
  console.log("합계"+answerCount)

  return(
    <div className="QuestionPage Common">
      {questionList.map((question,qidx)=>(
        answer.length === qidx &&(
          <div key={qidx}>
            <div className="QuestionContainer">{question.q}</div>
            <div className="AnswerContainer">
            {question.a.map((answer,aidx)=>(
              <div className="Answer"> <input className="AnswerBtn" type="button" key={aidx} value={answer.text} onClick={()=>nextQuestion(aidx, answer.score, answer.type)} /></div>
            ))}
            </div>            
          </div>
        )
      ))}
    </div>
  )
}