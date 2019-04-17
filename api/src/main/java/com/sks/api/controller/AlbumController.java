package com.sks.api.controller;


import com.sks.api.service.AlbumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public/albums")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlbumController {
    private final AlbumService albumService;

    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping(path = "/{album}")
    public ResponseEntity getAlbum(@PathVariable("album") int album) {
        return ResponseEntity.ok(albumService.getAlbumById(album));
    }

    @GetMapping()
    public ResponseEntity getAlbums() {
        return ResponseEntity.ok(albumService.getAlbums());
    }
}
