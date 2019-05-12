package com.sks.api.controller;

import com.sks.api.service.EventsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/public/events")
public class EventsController {
    private final EventsService eventsService;

    @Inject
    public EventsController(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    @GetMapping
    public ResponseEntity getEvents(@RequestParam(value = "type") String eventType) {
        return ResponseEntity.ok(eventsService.getEvents(eventType));
    }
}
