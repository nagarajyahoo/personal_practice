package com.sks.api.service;

import com.sks.api.model.UsersDetail;
import com.sks.api.util.converter.UserConverter;
import com.sks.dao.UsersDao;
import com.sks.dao.beans.SksUsersDB;
import com.sks.security.utils.SecurityUtils;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class UsersServiceImpl implements UsersService {
    private final UsersDao usersDao;
    private final UserConverter userConverter;
    private final SecurityUtils securityUtils;

    @Inject
    public UsersServiceImpl(final UsersDao usersDao,
                            final UserConverter userConverter,
                            final SecurityUtils securityUtils) {
        this.usersDao = usersDao;
        this.userConverter = userConverter;
        this.securityUtils = securityUtils;
    }

    @Override
    public UsersDetail addUser(final UsersDetail user) {
        SksUsersDB databaseUser = userConverter.convertToDBUser(user);
        SksUsersDB savedUser = usersDao.save(databaseUser);
        return userConverter.convertToJsonUser(savedUser);
    }

    @Override
    public String getRole() {
        String email = securityUtils.user();
        return email;
    }
}
