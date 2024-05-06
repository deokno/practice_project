package com.example.restful.edenTypeTest.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Schema(description = "유저정보")
@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Users {

	  @JsonIgnore
	  private int userKey;
		
	  @NotNull
	  @NotBlank
	  private String userName;
	
	  @NotNull
	  @NotEmpty
	  @NotBlank
	  private String email;
	  
	  @NotNull
	  @NotEmpty
	  @NotBlank
	  private String password;
	  
	  @JsonIgnore
	  private String isComplete;

//  public Users(String userName, String email, String isComplete) {
//    this.userName = userName;
//    this.email = email;
//    this.isComplete = isComplete;
//  }
}
