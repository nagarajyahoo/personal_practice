package com.sks.api.util.converter;

import com.sks.api.controller.model.User;
import com.sks.dao.beans.UsersDB;

public class UserConverter {
    public static UsersDB convertToDatabaseUser(User user) {
        UsersDB databaseUser = new UsersDB();
        databaseUser.setEmail(user.getEmail());
        databaseUser.setPassword(user.getPassword());
        databaseUser.setLocked((byte) 0);
        return databaseUser;
    }

    public static User convertToJsonUser(UsersDB databaseUser) {
        User user = new User();
        user.setId(databaseUser.getId());
        user.setEmail(databaseUser.getEmail());
        user.setPassword(databaseUser.getPassword());
        return user;
    }
}
