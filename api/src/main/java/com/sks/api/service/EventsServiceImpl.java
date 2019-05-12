package com.sks.api.service;

import com.sks.api.model.EventType;
import com.sks.api.model.Events;
import com.sks.api.util.converter.EventsConverter;
import com.sks.dao.EventsDao;
import com.sks.dao.beans.EventsDB;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

@Service
public class EventsServiceImpl implements EventsService {
    private final EventsDao eventsDao;
    private final EventsConverter converter;

    @Inject
    public EventsServiceImpl(final EventsDao eventsDao,
                             final EventsConverter converter) {
        this.eventsDao = eventsDao;
        this.converter = converter;
    }

    @Override
    public Events getEvents(String eventType) {
        final Events events = new Events();
        Iterable<EventsDB> allEvents;
        final EventType eventTypeEnum = EventType.fromString(eventType);
        switch (eventTypeEnum) {
            case ALL:
                allEvents = eventsDao.findAll();
                break;
            case UPCOMING:
                Timestamp now = new Timestamp(new Date().getTime());
                allEvents = eventsDao.getEventsByDate(now);
                break;
            default:
                allEvents = new ArrayList<>();
        }
        events.setEvents(converter.convertToEvents(allEvents));
        return events;
    }
}
