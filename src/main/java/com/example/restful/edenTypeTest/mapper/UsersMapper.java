package com.example.restful.edenTypeTest.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.Users;

@Mapper
public interface UsersMapper {
	int joinUser(@Param("users") Users users);
	
	int duplicateCheck(@Param("email") String email);
	
	Users findUser(@Param("users") Users users);
	
	String getResultType(@Param("email") String email);
	
	String[] getSameType(@Param("resultType") String resultType);
	
	String getUserKey(@Param("email") String email);
}


