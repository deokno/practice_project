package com.example.restful.edenTypeTest.dto;

import java.time.LocalDate;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Schema(description = "결과등록")
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TypeTestResult {
 
	  private String TypeTestResult;
	  
	  @NotNull
	  @NotBlank
	  private String email;
	  
	  
//	  public TypeTestResult(String Q1, String Q2, String Q3, String Q4, String Q5, String Q6, String Q7, String Q8) {
//	    this.Q1 = Q1;
//	  }
	  
	  
}
