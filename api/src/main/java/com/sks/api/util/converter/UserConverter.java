package com.sks.api.util.converter;

import com.sks.api.model.UserReqRes;
import com.sks.dao.beans.UsersDB;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class UserConverter {
    private final PasswordEncoder passwordEncoder;

    @Inject
    public UserConverter(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public UsersDB convertToDatabaseUser(UserReqRes user) {
        UsersDB databaseUser = new UsersDB();
        databaseUser.setEmail(user.getEmail());
        databaseUser.setPassword(passwordEncoder.encode(user.getPassword()));
        databaseUser.setLocked((byte) 0);
        return databaseUser;
    }

    public UserReqRes convertToJsonUser(UsersDB databaseUser) {
        UserReqRes user = new UserReqRes();
        user.setId(databaseUser.getId());
        user.setEmail(databaseUser.getEmail());
        user.setPassword(databaseUser.getPassword());
        return user;
    }
}
