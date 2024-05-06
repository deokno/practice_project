package com.example.restful.edenTypeTest.service;

import org.springframework.stereotype.Service;

import com.example.restful.edenTypeTest.RequestStatus;
import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.Users;
import com.example.restful.edenTypeTest.mapper.UsersMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersService {

  private final UsersMapper mapper;

  // 회원가입
  public StatusResponse joinUser(Users Users) {
	  Users User = mapper.findUser(Users);
	  if(User == null) {
		  int result = mapper.joinUser(Users);
	 	  
	 	  if(result == 1) {
	 		 return StatusResponse.builder()
					  .status(RequestStatus.SUCCESS)
					  .build();
	 	  }
	  } 
	  
	  return StatusResponse.builder()
			  .status(RequestStatus.FAIL)
			  .build();
  }
  
  // 아이디 중복체크
  public StatusResponse duplicateCheck(EmailRequest email) {
	  
	  int emailCheck = mapper.duplicateCheck(email.getEmail());
	  
	  if (emailCheck > 0 ) {
		  return StatusResponse.builder()
				  .status(RequestStatus.FAIL)
				  .build();
	  }else {
		  return StatusResponse.builder()
				  .status(RequestStatus.SUCCESS)
				  .build();
	  }
  }
  
  // 로그인 확인
  public LoginResponse loginCheck(Users Users) {
	  Users User = mapper.findUser(Users);
	  
	  if(User != null) {
		  
		  String resultType = mapper.getResultType(Users.getEmail());
		  
		  String userKey = mapper.getUserKey(Users.getEmail());
		  
		  String[] sameType = mapper.getSameType(resultType);
		  
		  if("1".equals(User.getIsComplete())) {
			  return LoginResponse.builder()
					  .status(RequestStatus.SUCCESS)
					  .isComplete(true)
					  .userName(User.getUserName())
					  .resultType(resultType)
					  .sameType(sameType)
					  .userKey(userKey)
					  .build();  
		  } else {
			  return LoginResponse.builder()
					  .status(RequestStatus.SUCCESS)
					  .isComplete(false)
					  .userName(User.getUserName())
					  .resultType("")
					  .userKey(userKey)
					  .sameType(new String[0])
					  .build();  
		  }
	  } else {
		  return LoginResponse.builder()
				  .status(RequestStatus.FAIL)
				  .isComplete(false)
				  .userName("")
				  .resultType(null)
				  .userKey("")
				  .sameType(new String[0])
				  .build();
	  }
  }
  
  // 사용자 불러오기
  public Users findUser(Users Users) {
	  return mapper.findUser(Users);
  }
}
