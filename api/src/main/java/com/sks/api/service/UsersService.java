package com.sks.api.service;

import com.sks.api.controller.model.User;
import org.springframework.stereotype.Service;


public interface UsersService {
    User addUser(User user);
}
