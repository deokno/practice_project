package com.example.restful.edenTypeTest.mapper;

import java.util.*;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.*;

@Mapper
public interface CommentsMapper {
	String getUserKey(@Param("userKey") String userKey);
	
	int putComment(Map<String ,String> commentMap);
	
	List<Comments> getComment();
	
	int setComment(@Param("comment") CommentResquest commentResquest);
	
	int delComment(@Param("comment") CommentResquest commentResquest);
}
