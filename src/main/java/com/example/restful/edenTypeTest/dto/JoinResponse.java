package com.example.restful.edenTypeTest.dto;

import com.example.restful.edenTypeTest.RequestStatus;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class JoinResponse {
	@Schema(description =  "상태값")
	private RequestStatus status;
}
