package com.sks.api.util.converter;

import com.sks.api.model.UsersDetail;
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

    public UsersDB convertToDatabaseUser(UsersDetail user) {
        UsersDB databaseUser = new UsersDB();
        databaseUser.setEmail(user.getEmail());
        databaseUser.setPassword(passwordEncoder.encode(user.getPassword()));
        databaseUser.setLocked((byte) 0);
        return databaseUser;
    }

    public UsersDetail convertToJsonUser(UsersDB databaseUser) {
        UsersDetail user = new UsersDetail();
        user.setId(databaseUser.getId());
        user.setEmail(databaseUser.getEmail());
        return user;
    }
}
