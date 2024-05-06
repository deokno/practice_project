package com.example.restful.edenTypeTest.mapper;

import java.util.*;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.*;

@Mapper
public interface TypeTestMapper {
	int create(Map<String ,String> resultUserMap);

	int updateIsComplete(@Param("userKey") String userKey);
	
	String getUserKey(@Param("email") String email);
	
	String[] getSameType(@Param("type") String type);
	
	String getResultType(@Param("userKey") String userKey);
	
	TypeTestResult selectResult(TypeTestResult typeTestResult);
}


