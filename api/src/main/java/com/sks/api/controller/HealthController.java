package com.sks.api.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/hello")
public class HealthController {
    @GetMapping
    public ResponseEntity hello() {
        return ResponseEntity.ok("Hello");
    }
}
