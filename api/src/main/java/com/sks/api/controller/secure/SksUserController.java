package com.sks.api.controller.secure;

import com.sks.api.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RestController
@RequestMapping("/api/sksusers")
public class SksUserController {
    private final UsersService usersService;

    @Inject
    public SksUserController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping(path = "/roles")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity getUserRole() {
        return ResponseEntity.ok(usersService.getRoles());
    }
}

