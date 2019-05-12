package com.sks.api.controller;

import com.sks.api.service.CommitteeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/public/committee")
public class CommitteeController {
    private final CommitteeService committeeService;

    @Inject
    public CommitteeController(CommitteeService committeeService) {
        this.committeeService = committeeService;
    }

    @GetMapping
    public ResponseEntity getCommittee() {
        return ResponseEntity.ok(committeeService.getCommittee());
    }
}
