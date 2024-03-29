package com.sks.security.auth;

import com.sks.dao.UsersDao;
import com.sks.dao.beans.SksUsersDB;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.inject.Inject;

@Service
public class SksUserDetailsService implements UserDetailsService {
    private final UsersDao usersDao;
    private final PasswordEncoder passwordEncoder;

    @Inject
    public SksUserDetailsService(final UsersDao usersDao,
                                 final PasswordEncoder passwordEncoder) {
        this.usersDao = usersDao;
        this.passwordEncoder = passwordEncoder;
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
        SksUsersDB databaseUser = usersDao.findByEmail(username);
        return new SksUser
                .Builder(databaseUser)
                .build();
    }
}