package com.example.restful.edenTypeTest.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.example.restful.edenTypeTest.RequestStatus;
import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.Comments;
import com.example.restful.edenTypeTest.entity.Users;
import com.example.restful.edenTypeTest.mapper.CommentsMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentsService {

  private final CommentsMapper mapper;

  // 댓글등록
  public StatusResponse putComment(CommentResquest CommentResquest) {
	  
	  Map<String, String> commentMap = new HashMap<>(); 
	  commentMap.put("userKey", CommentResquest.getUserKey());
	  commentMap.put("commentText", CommentResquest.getCommentText());
	  
	  int insert = mapper.putComment(commentMap);
	  
	  if(insert > 0) {
		  return StatusResponse.builder()
				  .status(RequestStatus.SUCCESS)
				  .build();
	  }
	  
	  return StatusResponse.builder()
			  .status(RequestStatus.FAIL)
			  .build();
  }
  
  // 댓글리스트 
  public CommentListResponse getComment() {
	  
	  List<Comments> commentList = mapper.getComment();
	  
	  if(commentList != null) {
		  return CommentListResponse.builder()
				  .status(RequestStatus.SUCCESS)
				  .commentList(commentList)
				  .build();
	  }
	  
	  return CommentListResponse.builder()
			  .status(RequestStatus.FAIL)
			  .commentList(null)
			  .build();
  }
  
  // 댓글수정
  public StatusResponse setComment(CommentResquest CommentResquest) {
	  
	  int result = mapper.setComment(CommentResquest);
	  
	  if(result > 0) {
		  return StatusResponse.builder()
				  .status(RequestStatus.SUCCESS)
				  .build();
	  }
	  
	  return StatusResponse.builder()
			  .status(RequestStatus.FAIL)
			  .build();
  };
  
  // 댓글삭제
  public StatusResponse delComment(CommentResquest CommentResquest) {
int result = mapper.delComment(CommentResquest);
	  
	  if(result > 0) {
		  return StatusResponse.builder()
				  .status(RequestStatus.SUCCESS)
				  .build();
	  }
	  
	  return StatusResponse.builder()
			  .status(RequestStatus.FAIL)
			  .build();
  }
}
