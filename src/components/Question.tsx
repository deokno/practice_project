import React, { useState } from "react";

export default function Question(){
  const [idx, setIdx] = useState(0);
  const questionList = [
    {
      q: ["질문1"],
      a:[
        {type : 'A', text :'1-A'},
        {type : 'B', text : '1-B'}
        ]
    },
    {
      q: ["질문2"],
      a:[
        {type : 'C', text :'2-A'},
        {type : 'D', text : '2-B'}
        ]
    },
    {
      q: ["질문3"],
      a:[
        {type : 'A', text :'3-A'},
        {type : 'B', text : '3-B'}
        ]
    },
    {
      q: ["질문4"],
      a:[
        {type : 'C', text :'4-A'},
        {type : 'D', text : '4-B'}
        ]
    },
    {
      q: ["질문5"],
      a:[
        {type : 'A', text :'5-A'},
        {type : 'B', text : '5-B'}
        ]
    },
    {
      q: ["질문6"],
      a:[
        {type : 'C', text :'6-A'},
        {type : 'D', text : '6-B'}
        ]
    },
    {
      q: ["질문7"],
      a:[
        {type : 'A', text :'7-A'},
        {type : 'B', text : '7-B'}
        ]
    },
    {
      q: ["질문8"],
      a:[
        {type : 'C', text :'8-A'},
        {type : 'D', text : '8-B'}
        ]
    }
  ]
  const nextQuestion = (key : number ,answerType:string)=>{
    const AnswerList = [key,answerType];
    setIdx(idx+1);
    
  }
  
  return(
    <div>
      {questionList.map((question,qidx)=>(
        idx === qidx &&(
          <div key={qidx}>
            <h3>{question.q}</h3>
            {question.a.map((answer,aidx)=>(
              <button key={aidx} onClick={()=>nextQuestion(aidx, answer.type)} data-answertype={answer.type}>{answer.text}</button>
            ))}
          </div>
        )
      ))}
    </div>
  )
}