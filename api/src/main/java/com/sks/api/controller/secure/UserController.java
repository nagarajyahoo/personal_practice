package com.sks.api.controller.secure;

import com.sks.api.controller.model.User;
import com.sks.api.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UsersService usersService;

    @Inject
    public UserController(UsersService usersService) {
        this.usersService = usersService;
    }

    public ResponseEntity addUser(User user) {
        return ResponseEntity.ok(usersService.addUser(user));
    }
}
