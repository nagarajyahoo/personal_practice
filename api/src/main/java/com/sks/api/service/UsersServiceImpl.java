package com.sks.api.service;

import com.sks.api.model.UserReqRes;
import com.sks.api.util.converter.UserConverter;
import com.sks.dao.UsersDao;
import com.sks.dao.beans.UsersDB;
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
    public UserReqRes addUser(final UserReqRes user) {
        UsersDB databaseUser = userConverter.convertToDatabaseUser(user);
        UsersDB savedUser = usersDao.save(databaseUser);
        return userConverter.convertToJsonUser(savedUser);
    }
}
