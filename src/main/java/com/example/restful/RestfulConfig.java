package com.example.restful;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.example.restful.**.mapper")
public class RestfulConfig {

}
