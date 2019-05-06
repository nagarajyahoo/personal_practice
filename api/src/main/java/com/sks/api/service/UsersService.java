package com.sks.api.service;


import com.sks.api.model.UsersDetail;

public interface UsersService {
    UsersDetail addUser(UsersDetail user);

    String getRole();
}
