package com.sks.api.controller;


import com.sks.api.service.GalleryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/galleries")
public class GalleryController {
    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @GetMapping(path = "/{album}")
    public ResponseEntity getUpcomingEvents(@PathVariable("album") int album) {
        return ResponseEntity.ok(galleryService.getPhotosByAlbum(album));
    }
}
