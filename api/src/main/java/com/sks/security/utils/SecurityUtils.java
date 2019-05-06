package com.sks.security.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class SecurityUtils {
    public String user() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (String) authentication.getPrincipal();
    }
}
