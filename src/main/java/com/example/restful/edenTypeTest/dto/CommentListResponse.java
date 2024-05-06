package com.example.restful.edenTypeTest.dto;

import java.util.*;

import com.example.restful.edenTypeTest.RequestStatus;
import com.example.restful.edenTypeTest.entity.Comments;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CommentListResponse {
	@Schema(description =  "상태값")
	private RequestStatus status;
	
	@Schema(description =  "댓글리스트")
	private List<Comments> commentList;
}