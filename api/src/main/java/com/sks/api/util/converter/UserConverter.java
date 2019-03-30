package com.sks.api.util.converter;

import com.sks.api.model.UsersDetail;
import com.sks.dao.beans.SksUsersDB;
import com.sks.dao.beans.UserDetailsDB;

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

    public SksUsersDB convertToDBUser(UsersDetail user) {
        SksUsersDB dbUser = new SksUsersDB();
        dbUser.setEmail(user.getEmail());
        dbUser.setPassword(passwordEncoder.encode(user.getPassword()));
        dbUser.setLocked((byte) 0);
        UserDetailsDB dbUserDetail = convertToDBUserDetails(user);
        dbUser.setUserDetails(dbUserDetail);
        dbUserDetail.setSksUser(dbUser);
        return dbUser;
    }

    private UserDetailsDB convertToDBUserDetails(UsersDetail user) {
        UserDetailsDB dbUserDetail = new UserDetailsDB();
        dbUserDetail.setPhone(user.getPhone());
        dbUserDetail.setFirstName(user.getFirstName());
        dbUserDetail.setLastName(user.getLastName());
        return dbUserDetail;
    }

    public UsersDetail convertToJsonUser(SksUsersDB dbUser) {
        UsersDetail user = new UsersDetail();
        user.setId(dbUser.getId());
        user.setEmail(dbUser.getEmail());
        return user;
    }
}
