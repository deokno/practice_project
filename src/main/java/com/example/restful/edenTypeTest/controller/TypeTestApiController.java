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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.restful.edenTypeTest.dto.*;
import com.example.restful.edenTypeTest.entity.*;
import com.example.restful.edenTypeTest.service.TypeTestService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/typeTest")
public class TypeTestApiController {

  private final TypeTestService service;

  //@CrossOrigin(origins = "http://localhost:3000")
  @PostMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(value = HttpStatus.CREATED)
  public TypeTestResponse create(@RequestBody TypeTestRequest TypeTestRequest) {
    return service.create(TypeTestRequest);
  }

}
