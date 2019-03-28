package com.sks.api.util.converter;

import com.sks.api.model.Event;
import com.sks.dao.beans.EventsDB;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventsConverter {
    public List<Event> convertToEvents(Iterable<EventsDB> dbEvents) {
        List<Event> events = new ArrayList<>();
        dbEvents.forEach(dbEvent -> events.add(convertToEvent(dbEvent)));
        return events;
    }

    public Event convertToEvent(EventsDB dbEvent) {
        Event event = new Event();
        event.setId(dbEvent.getId());
        event.setName(dbEvent.getName());
        event.setDescription(dbEvent.getDescription());
        event.setDatetime(dbEvent.getEventDate().getTime());
        return event;
    }
}
