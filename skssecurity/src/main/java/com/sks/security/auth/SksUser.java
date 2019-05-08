package com.sks.security.auth;

import com.sks.dao.beans.SksUsersDB;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class SksUser implements UserDetails {
    private final Collection<? extends GrantedAuthority> permissions;
    private final String username;
    private final String password;
    private final boolean locked;

    private SksUser(Builder builder) {
        this.username = builder.username;
        this.password = builder.password;
        this.locked = builder.locked;
        this.permissions = builder.permissions;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public static class Builder {
        private Collection<? extends GrantedAuthority> permissions;
        private String username;
        private String password;
        private boolean locked;

        public Builder(SksUsersDB databaseUser) {
            this.username = databaseUser.getEmail();
            this.password = databaseUser.getPassword();
            this.locked = databaseUser.getLocked() == 1;
            this.permissions = new ArrayList<>();
        }

        public SksUser build() {
            return new SksUser(this);
        }
    }
}
