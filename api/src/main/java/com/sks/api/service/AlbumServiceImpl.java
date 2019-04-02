package com.sks.api.service;

import com.sks.api.model.Album;
import com.sks.api.model.Photo;
import com.sks.api.util.converter.PhotosConverter;
import com.sks.dao.GalleriesDao;
import com.sks.dao.beans.SksAlbumDB;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlbumServiceImpl implements AlbumService {
    private final GalleriesDao galleriesDao;
    private final PhotosConverter photosConverter;

    public AlbumServiceImpl(final GalleriesDao galleriesDao,
                            final PhotosConverter photosConverter) {
        this.galleriesDao = galleriesDao;
        this.photosConverter = photosConverter;
    }

    @Override
    public Album getAlbumById(int albumId) {
        Optional<SksAlbumDB> dbAlbum = galleriesDao.findById(albumId);
        List<Photo> photos = dbAlbum
                .map(album -> photosConverter.convertToPhotos(album.getPhotos()))
                .orElse(new ArrayList<>());

        Album album = new Album();
        album.setPhotos(photos);
        return album;
    }
}
