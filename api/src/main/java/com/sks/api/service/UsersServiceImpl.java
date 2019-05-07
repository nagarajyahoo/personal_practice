package com.sks.api.service;

import com.sks.api.model.UserRoles;
import com.sks.api.model.UsersDetail;
import com.sks.api.util.converter.UserConverter;
import com.sks.dao.UsersDao;
import com.sks.dao.beans.SksRolesDB;
import com.sks.dao.beans.SksUsersDB;
import com.sks.security.utils.SecurityUtils;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

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
    public UserRoles getRoles() {
        String email = securityUtils.user();
        List<SksRolesDB> dbRoles = usersDao.getRolesByEmail(email);
        UserRoles userRoles = new UserRoles();
        userRoles.setRoles(dbRoles.stream().map(SksRolesDB::getRole).collect(Collectors.toList()));
        return userRoles;
    }
}
