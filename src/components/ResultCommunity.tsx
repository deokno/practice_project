import React, { useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";

export default function ResultCommunity(){
  const user = useSelector((state: RootState) => state.userInfo)
  const [newComment, setNewComment] = useState('')
  const [comment, setComments] = useState< {
    id: string;
    writer: string;
    date: string;
    content: string;
}[]>([]);

  useEffect(()=>{
    //api호출하여 댓글 리스트 가져오기
    const commentList = [
      {
        id:'1',
        writer : '맹구',
        date : '20240401',
        content :'콧물'
      },
      {
        id:'2',
        writer : '짱구',
        date : '20240402',
        content :'액션가면'
      },
      {
        id:'3',
        writer : '훈이',
        date : '20240403',
        content :'주먹밥'
      }
    ];
    setComments(commentList);
  },[])
  const btnSave=()=>{
    if(newComment!=''){
      const newCommentItem = {
        id: "4",
        writer: user.userName,//스토어에서 사용자 가져오기,
        date: '20240416', // 실제 날짜를 여기에 삽입해야 합니다.
        content: newComment,
      };
      setComments([...comment, newCommentItem]);
      setNewComment('');
    }
  }
  return(
    <>
    <div className="ResultCommunity">
      <div className="CommentList">
        {comment.map(value=>(
          <div key={value.id}>
            <span className="CommentList_writer">{value.writer}</span> <span className="CommentList_date">{value.date}</span>
            <div className="CommentList_content">{value.content}</div>
          </div>
        ))}
      </div>
      <div className="CommentInput">
        <input type="text" placeholder="댓글을 입력해주세요" value={newComment} onChange={e=>setNewComment(e.target.value)}/>
        <input type="button" value="저장" onClick={btnSave}/>
      </div>
    </div>
    </>
  )
}