package com.sks.dao;

import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;

public enum UserSex {
    MALE((byte)1, "male"),
    FEMALE((byte)2, "female"),
    DONT_KNOW((byte)-1, null);

    public byte dbVal;
    public String strVal;

    UserSex(byte dbVal, String strVal) {
        this.dbVal = dbVal;
        this.strVal = strVal;
    }

    public static UserSex fromStrVal(String strVal) {
        if(StringUtils.isEmpty(strVal)) {
            return DONT_KNOW;
        } else {
            Optional<UserSex> result = Arrays.stream(UserSex.values())
                    .filter(userSex -> strVal.equalsIgnoreCase(userSex.strVal))
                    .findFirst();
            return result.orElse(DONT_KNOW);
        }
    }
}
