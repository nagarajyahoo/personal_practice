package com.sks.api.service;

import com.sks.api.model.Photo;

import java.util.List;

public interface GalleryService {
    List<Photo> getPhotosByAlbum(int albumId);
}
