package com.sks.api.controller;

import com.sks.api.model.UsersDetail;
import com.sks.api.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;

@RestController
@RequestMapping("/public/register")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
