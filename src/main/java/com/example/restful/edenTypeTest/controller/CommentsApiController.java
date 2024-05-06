package com.example.restful.edenTypeTest.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.Users;
import com.example.restful.edenTypeTest.service.CommentsService;
import com.example.restful.edenTypeTest.service.UsersService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/comments")
// 댓글 목록 조회 Get /comments
// 댓글 1개 조회 Get /comments/{commentKey}
// 댓글 1개 등록 Post(insert) /comments  
// 댓글 1개 수정 Put /comments/{commentKey}
// 댓글 1개 삭제 Delete /comments/{commentKey}
public class CommentsApiController {

  private final CommentsService service;
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(value = HttpStatus.CREATED)
  public StatusResponse putComment(@RequestBody CommentResquest CommentResquest) {
	  // @PathVariable(name = "commentKey") String commentKey
	  return service.putComment(CommentResquest);
  }
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/getComment", produces = MediaType.APPLICATION_JSON_VALUE)
  public CommentListResponse getComment() {
	  return service.getComment();
  }
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/setComment", produces = MediaType.APPLICATION_JSON_VALUE)
  public StatusResponse setComment(@RequestBody CommentResquest CommentResquest) {
	  return service.setComment(CommentResquest);
  }
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/delComment", produces = MediaType.APPLICATION_JSON_VALUE)
  public StatusResponse delComment(@RequestBody CommentResquest CommentResquest) {
	  return service.delComment(CommentResquest);
  }
  
}
