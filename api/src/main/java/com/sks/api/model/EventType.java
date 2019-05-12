package com.sks.api.model;

import org.springframework.util.StringUtils;

import java.util.Arrays;

public enum EventType {
    ALL("all"),
    UPCOMING("upcoming");

    private String strValue;

    EventType(String strValue) {
        this.strValue = strValue;
    }

    public static EventType fromString(String strValue) {
        if (StringUtils.isEmpty(strValue)) {
            throw new IllegalArgumentException("value cannot be empty");
        } else {
            return Arrays.stream(values())
                    .filter(type -> type.strValue.equalsIgnoreCase(strValue))
                    .findFirst()
                    .orElseThrow(IllegalArgumentException::new);
        }
    }
}
