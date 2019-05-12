package com.sks.api.exceptions;

import com.sks.api.model.ErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;


@ControllerAdvice
@Configuration
public class SksExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(SksExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(HttpServletRequest request, Exception ex) {
        final ErrorResponse response = new ErrorResponse();
        HttpStatus status;
        if (ex instanceof IllegalArgumentException) {
            status = HttpStatus.BAD_REQUEST;
            response.setMessage("Invalid arguments");
        } else {
            logger.error("Error : ", ex);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            response.setMessage("server error occurred");
        }
        return ResponseEntity.status(status).body(response);
    }
}
