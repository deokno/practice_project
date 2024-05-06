import React, { useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/useStore";
import commentApi from '../apis/comment';
import moment from 'moment';

export default function ResultCommunity(){
  const user = useSelector((state: RootState) => state.userInfo)
  const [commentText, setcommentText] = useState('') //댓글
  const[commentKey,setcommentKey] =useState('') //댓글키
  const[isEdit,setisEdit] = useState(false); //수정여부
  const [comment, setComments] = useState< {
    commentKey: string;
    userKey : string;
    userName: string;
    commentText: string;
    createdDate: string;
}[]>([]); 
// 댓글리스트 api 호출
const getCommentList = async()=>{
  const getComment = await commentApi.getComment();
  if(getComment.status==="SUCCESS"){
    //성공시 
   const commentList = getComment.commentList;
   //Comments State 세팅
   setComments(commentList);
  }else{

  }
}

  useEffect(()=>{
    getCommentList();
    //api호출하여 댓글 리스트 가져오기
    // const commentList = [
    //   {
    //     id:'1',
    //     writer : '맹구',
    //     date : '20240401',
    //     content :'콧물'
    //   },
    //   {
    //     id:'2',
    //     writer : '짱구',
    //     date : '20240402',
    //     content :'액션가면'
    //   },
    //   {
    //     id:'3',
    //     writer : '앙팡이',
    //     date : '20240403',
    //     content :'주먹밥'
    //   }
    // ];
    //setComments(commentList);
  },[])

  //userkey랑 댓글내용
  const btnSave=async(userKey:string)=>{
    if(commentText!=''){
      //댓글수정일시
      if(isEdit){
        //댓글 수정 api호출
        const updateResult = await commentApi.updateComment({commentKey,commentText});
        if(updateResult.status==="SUCCESS"){
          setisEdit(false);
          //getCommentList();
        }
        // setComments((prevComments) =>
        //   prevComments.map((comment) => (comment.id === id ? newCommentItem : comment)),
        // );
      }else{
        //댓글저장
        const saveResult = await commentApi.saveComment({userKey,commentText});
        if(saveResult.status==="SUCCESS"){
          //getCommentList();
        }
      }
      getCommentList();
      setcommentText('');
    }else{
      alert('댓글을 입력해주세요!');
    }
  }

  //수정버튼
  //modifycommentKey(수정댓글키),commentText(수정댓글)
  const btnMod=(modifycommentKey:string,commentText:string)=>{
    setisEdit(true);
    setcommentText(commentText);
    setcommentKey(modifycommentKey);
  }

  //댓글삭제
  const btnDel = async(commentKey:string)=>{
    const deleteResult = await commentApi.delComment({commentKey});
    if(deleteResult.status==="SUCCESS"){
      getCommentList();
    }
  }
  return(
    <>
    <div className="ResultCommunity">
      <div className="CommentList">
        {comment.map(value=>(
          <div key={value.commentKey} className="Commentbox">
            <span className="CommentList_writer">{value.userName}</span> <span className="CommentList_date">{moment(value.createdDate).format("YYYY-MM-DD HH:mm:ss")}</span>
            <div className="CommentList_content"><input type="text" value={value.commentText} className="CommentList_content_input"/>
            {value.userName === user.userName && (
              <div className="userBtn">
                <input type='button' value="수정" className="btnMod" onClick={()=>btnMod(value.commentKey,value.commentText)}/>
                <input type='button' value="삭제" className="btnDel" onClick={()=>btnDel(value.commentKey)}/>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
      <div className="CommentInput">
        <input type="text" placeholder="댓글을 입력해주세요" value={commentText} onChange={e=>setcommentText(e.target.value)}/>
        <input type="button" value="저장" onClick={()=>btnSave(user.userkey)} className="btnSave"/>
      </div>
    </div>
    </>
  )
}