package com.example.restful.edenTypeTest.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.example.restful.edenTypeTest.RequestStatus;
import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.ResultUser;
import com.example.restful.edenTypeTest.mapper.TypeTestMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TypeTestService {

	private final TypeTestMapper mapper;

	public TypeTestResponse create(TypeTestRequest TypeTestRequest) {
		
		// String userKey = mapper.getUserKey(TypeTestRequest.getEmail());
		
	
		Map<String, String> resultUserMap = new HashMap<>(); 
		resultUserMap.put("userKey", TypeTestRequest.getUserKey());
		
		if(TypeTestRequest.getScore() <= 14) {
			resultUserMap.put("type", "1");
		} else if (14 < TypeTestRequest.getScore() && TypeTestRequest.getScore() <= 20) {
			resultUserMap.put("type", "2");
		} else if (20 < TypeTestRequest.getScore() && TypeTestRequest.getScore() <= 26) {
			resultUserMap.put("type", "3");
		} else {
			resultUserMap.put("type", "4");
		}
		
		int insert = mapper.create(resultUserMap);
		
		if(insert > 0) {
			String[] sameType = mapper.getSameType(resultUserMap.get("type"));
			String resultType = mapper.getResultType(TypeTestRequest.getUserKey());
			int isComplete = mapper.updateIsComplete(TypeTestRequest.getUserKey());
			if(isComplete > 0) {
				return TypeTestResponse.builder()
						.status(RequestStatus.SUCCESS)
						.resultType(resultType)
						.sameType(sameType)
						.build();
			}
		}
		
		return TypeTestResponse.builder()
				.status(RequestStatus.FAIL)
				.resultType("")
				.sameType(new String[0])
				.build();
		  
	}

  
  
}
