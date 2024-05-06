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
import com.example.restful.edenTypeTest.service.UsersService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UsersApiController {

  private final UsersService service;
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/join", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(value = HttpStatus.CREATED)
  public StatusResponse joinUser(@RequestBody Users Users) {
	  return service.joinUser(Users);
  }
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/duplicateCheck", produces = MediaType.APPLICATION_JSON_VALUE)
  public StatusResponse duplicateCheck(@RequestBody EmailRequest email) {
	  return service.duplicateCheck(email);
  }
  
  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "/loginCheck", produces = MediaType.APPLICATION_JSON_VALUE)
  public LoginResponse loginCheck(@RequestBody Users Users) {
	  return service.loginCheck(Users);
  }
  
  @Operation(summary = "사용자 정보를 가져옵니다.",
	  parameters = {@Parameter(name = "email", description = "사용자 이메일", example = "chunsik@naver.com")})
  @PostMapping(path = "/findUser")
  public Users findUser(@RequestParam(name = "email") Users Users) {
    return service.findUser(Users);
  }

  
  
}
