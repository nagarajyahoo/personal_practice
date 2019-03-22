package com.sks.api.service;

import com.sks.api.controller.model.User;
import com.sks.api.util.converter.UserConverter;
import com.sks.dao.UsersDao;
import com.sks.dao.beans.UsersDB;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {
    private final UsersDao usersDao;

    public UsersServiceImpl(UsersDao usersDao) {
        this.usersDao = usersDao;
    }

    @Override
    public User addUser(final User user) {
        UsersDB databaseUser = UserConverter.convertToDatabaseUser(user);
        UsersDB savedUser = usersDao.save(databaseUser);
        return UserConverter.convertToJsonUser(savedUser);
    }
}
