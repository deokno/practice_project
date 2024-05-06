package com.example.restful;

import javax.sql.DataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication(scanBasePackages = "com.example")
public class RestfulApplication {

  public static void main(String[] args) {
    SpringApplication.run(RestfulApplication.class, args);
  }

  @Bean(name = "datasource")
  @ConfigurationProperties(prefix = "spring.datasource")
  public DataSource groupwareDataSource() {
	  return DataSourceBuilder.create().build();
  }
  
  @Bean
  SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
    SqlSessionFactoryBean sessionFactoryBean = new SqlSessionFactoryBean();
    sessionFactoryBean.setDataSource(dataSource);

    Resource[] resources = new PathMatchingResourcePatternResolver().getResources("classpath*:mapper/**/*.xml");
    sessionFactoryBean.setMapperLocations(resources);
    return sessionFactoryBean.getObject();
  }

  public SqlSessionTemplate sqlSesssionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
	  return new SqlSessionTemplate(sqlSessionFactory);
  }
  
}
