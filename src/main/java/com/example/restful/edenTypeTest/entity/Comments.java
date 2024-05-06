package com.example.restful.edenTypeTest.entity;

import java.time.LocalDateTime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

@Schema(description = "댓글정보")
@Builder
@Getter
//@NoArgsConstructor(access = AccessLevel.PRIVATE)
//@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Comments {
	
	private int commentKey;
	
	private int userKey;
	
	private String userName;
	
	private String commentText;
	
	private LocalDateTime createdDate;
	
}
