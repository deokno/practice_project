import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Question.style.css";

export default function Question(props:{onComplete(answer:string[]):void}){
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<string[]>([]);

  const questionList = [
    {
      q: ["질문1"],
      a:[
        {type : 'A', text :'1-A'},
        {type : 'B', text : '1-B'},
        {type : 'C', text : '1-C'},
        {type : 'D', text : '1-D'}
        ]
    },
    // {
    //   q: ["질문2"],
    //   a:[
    //     {type : 'A', text :'2-A'},
    //     {type : 'B', text : '2-B'},
    //     {type : 'C', text :'2-C'},
    //     {type : 'D', text : '2-D'}
    //     ]
    // },
    // {
    //   q: ["질문3"],
    //   a:[
    //     {type : 'A', text :'3-A'},
    //     {type : 'B', text :'3-B'},
    //     {type : 'C', text :'3-C'},
    //     {type : 'D', text :'3-D'}
    //     ]
    // },
    // {
    //   q: ["질문4"],
    //   a:[
    //     {type : 'A', text :'4-A'},
    //     {type : 'B', text :'4-B'},
    //     {type : 'C', text :'4-C'},
    //     {type : 'D', text :'4-D'}
    //     ]
    // },
    // {
    //   q: ["질문5"],
    //   a:[
    //     {type : 'A', text :'5-A'},
    //     {type : 'B', text : '5-B'},
    //     {type : 'C', text :'5-C'},
    //     {type : 'D', text : '5-D'}
    //     ]
    // },
    // {
    //   q: ["질문6"],
    //   a:[
    //     {type : 'A', text :'6-A'},
    //     {type : 'B', text : '6-B'},
    //     {type : 'C', text :'6-C'},
    //     {type : 'D', text : '6-D'}
    //     ]
    // },
    // {
    //   q: ["질문7"],
    //   a:[
    //     {type : 'A', text :'7-A'},
    //     {type : 'B', text : '7-B'},
    //     {type : 'C', text :'7-C'},
    //     {type : 'D', text : '7-D'}
    //     ]
    // },
    // {
    //   q: ["질문8"],
    //   a:[
    //     {type : 'A', text :'8-A'},
    //     {type : 'B', text : '8-B'},
    //     {type : 'C', text :'8-C'},
    //     {type : 'D', text : '8-D'}
    //     ]
    // }
  ]

  useEffect(() => {
    console.log(answer)
    if(answer.length === questionList.length) {
      props.onComplete(answer)
    }
  }, [answer])

  const nextQuestion = (key : number ,answerType:string)=>{
    // handleSave();    
    setAnswer((prev) => [...prev, answerType]) 
  }

  return(
    <div className="QuestionPage Common">
      {questionList.map((question,qidx)=>(
        answer.length === qidx &&(
          <div key={qidx}>
            <div className="QuestionContainer">{question.q}</div>
            <div className="AnswerContainer">
            {question.a.map((answer,aidx)=>(
              <div className="Answer"> <input className="AnswerBtn" type="button" key={aidx} value={answer.text} onClick={()=>nextQuestion(aidx, answer.type)} /></div>
            ))}
            </div>            
          </div>
        )
      ))}
    </div>
  )
}