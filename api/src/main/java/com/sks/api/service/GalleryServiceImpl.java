package com.sks.api.service;

import com.sks.api.model.Photo;
import com.sks.api.util.converter.PhotosConverter;
import com.sks.dao.GalleriesDao;
import com.sks.dao.beans.SksAlbumDB;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GalleryServiceImpl implements GalleryService {
    private final GalleriesDao galleriesDao;
    private final PhotosConverter photosConverter;

    public GalleryServiceImpl(final GalleriesDao galleriesDao,
                              final PhotosConverter photosConverter) {
        this.galleriesDao = galleriesDao;
        this.photosConverter = photosConverter;
    }

    @Override
    public List<Photo> getPhotosByAlbum(int albumId) {
        Optional<SksAlbumDB> dbAlbum = galleriesDao.findById(albumId);
        return dbAlbum
                .map(album -> photosConverter.convertToPhotos(album.getPhotos()))
                .orElse(new ArrayList<>());
    }
}
