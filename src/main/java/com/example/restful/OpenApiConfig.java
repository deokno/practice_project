package com.example.restful;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
    info = @Info(title = "com.example.restful", description = "예제 레스트풀 에이피아이", version = "v1"))
@Configuration
public class OpenApiConfig {

  @Bean
  GroupedOpenApi webapp() {
    return GroupedOpenApi.builder()
        .group("edenTypeTest")
        .pathsToMatch("/**/**")
        //.pathsToMatch("/user/**")
        .build();
  }
}
