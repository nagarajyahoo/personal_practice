package com.sks.api.controller;

import com.sks.api.model.UsersDetail;
import com.sks.api.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;

@RestController
@RequestMapping("/register")
public class RegisterController {
    private final UsersService usersService;

    @Inject
    public RegisterController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping
    @Consumes(MediaType.APPLICATION_JSON)
    public ResponseEntity addUser(@RequestBody UsersDetail user) {
        return ResponseEntity.ok(usersService.addUser(user));
    }
}
