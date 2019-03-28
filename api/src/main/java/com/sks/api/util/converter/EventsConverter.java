package com.sks.api.util.converter;

import com.sks.api.model.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventsConverter {
    public List<Event> convertToEvents() {
        return new ArrayList<>();
    }
}
