package com.blogProject.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class StatusAop {

  private static final Logger logger = LoggerFactory.getLogger(StatusAop.class);

  @Before("execution(* com.blogProject.controller.*.*(..))")
  public void beforeMethod(JoinPoint joinPoint) {
    StringBuilder sb = new StringBuilder();
    for (Object obj : joinPoint.getArgs()) {
      sb.append("args: " + obj.toString() + "|");
    }
    logger.info("before method: " + sb.toString());
  }
}
