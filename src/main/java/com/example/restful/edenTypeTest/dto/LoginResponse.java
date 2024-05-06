package com.example.restful.edenTypeTest.dto;

import com.example.restful.edenTypeTest.RequestStatus;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class LoginResponse {

	@Schema(description =  "상태값")
	private RequestStatus status;
	private Boolean isComplete;
	private String userKey;
	private String userName;
	private String resultType;
	private String[] sameType;
	
//	private LoginResponse(Boolean status, boolean isComplete) {
//		this.status = "";
//		this.isComplete = isComplete;
//	}

//	public static LoginResponse create(int serviceId, int userId, Boolean result) {
//		return new LoginResponse(1, 2, false);
//	}
}
