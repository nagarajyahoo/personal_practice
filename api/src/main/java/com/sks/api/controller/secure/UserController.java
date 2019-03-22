package com.sks.api.controller.secure;

import com.sks.api.model.UserReqRes;
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
public class UserController {
    private final UsersService usersService;

    @Inject
    public UserController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping
    @Consumes(MediaType.APPLICATION_JSON)
    public ResponseEntity addUser(@RequestBody UserReqRes user) {
        return ResponseEntity.ok(usersService.addUser(user));
    }
}