package com.sks.api.service;

import com.sks.api.model.UsersDetail;
import com.sks.api.util.converter.UserConverter;
import com.sks.dao.UsersDao;
import com.sks.dao.beans.SksUsersDB;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {
    private final UsersDao usersDao;
    private final UserConverter userConverter;

    public UsersServiceImpl(final UsersDao usersDao,
                            final UserConverter userConverter) {
        this.usersDao = usersDao;
        this.userConverter = userConverter;
    }

    @Override
    public UsersDetail addUser(final UsersDetail user) {
        SksUsersDB databaseUser = userConverter.convertToDBUser(user);
        SksUsersDB savedUser = usersDao.save(databaseUser);
        return userConverter.convertToJsonUser(savedUser);
    }
}
