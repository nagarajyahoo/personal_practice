package com.sks.api.service;

import com.sks.api.model.Event;
import com.sks.api.model.Events;
import com.sks.api.util.converter.EventsConverter;
import com.sks.dao.EventsDao;
import com.sks.dao.beans.EventsDB;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

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
    public Events getEvents() {
        Iterable<EventsDB> allEvents = eventsDao.findAll();
        List<Event> eventList = converter.convertToEvents(allEvents);
        final Events events = new Events();
        events.setEvents(eventList);
        return events;
    }
}
