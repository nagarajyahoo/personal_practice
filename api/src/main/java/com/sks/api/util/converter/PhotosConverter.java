package com.sks.api.util.converter;

import com.sks.api.model.Photo;
import com.sks.dao.beans.SksAlbumPhotosDB;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PhotosConverter {
    public List<Photo> convertToPhotos(List<SksAlbumPhotosDB> dbPhotos) {
        return dbPhotos.stream()
                .map(this::convertToPhoto)
                .collect(Collectors.toList());
    }

    private Photo convertToPhoto(SksAlbumPhotosDB dbPhoto) {
        Photo photo = new Photo();
        photo.setId(dbPhoto.getId());
        photo.setTitle(dbPhoto.getPhotoCaption());
        photo.setDescription(dbPhoto.getDescription());
        photo.setUrl(dbPhoto.getPhotUrl());
        return photo;
    }
}
