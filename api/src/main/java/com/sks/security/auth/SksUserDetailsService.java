package com.sks.security.auth;

import com.sks.dao.UsersDao;
import com.sks.dao.beans.UsersDB;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.inject.Inject;

@Service
public class SksUserDetailsService implements UserDetailsService {
    private final UsersDao usersDao;

    @Inject
    public SksUserDetailsService(final UsersDao usersDao) {
        this.usersDao = usersDao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (StringUtils.isEmpty(username)) {
            return null;
        } else {
            return getUserDetails(username);
        }
    }

    private UserDetails getUserDetails(String username) {
        UsersDB databaseUser = usersDao.findByEmail(username);
        return new SksUser
                .Builder(databaseUser)
                .build();
    }
}