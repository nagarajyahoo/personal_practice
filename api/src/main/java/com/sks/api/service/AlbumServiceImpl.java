package com.sks.api.service;

import com.sks.api.model.Album;
import com.sks.api.model.Albums;
import com.sks.api.model.Photo;
import com.sks.api.util.converter.AlbumConverter;
import com.sks.api.util.converter.PhotosConverter;
import com.sks.dao.AlbumsDao;
import com.sks.dao.beans.SksAlbumDB;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlbumServiceImpl implements AlbumService {
    private final AlbumsDao albumsDao;
    private final PhotosConverter photosConverter;
    private final AlbumConverter albumConverter;

    public AlbumServiceImpl(final AlbumsDao albumsDao,
                            final PhotosConverter photosConverter,
                            final AlbumConverter albumConverter) {
        this.albumsDao = albumsDao;
        this.photosConverter = photosConverter;
        this.albumConverter = albumConverter;
    }

    @Override
    public Album getAlbumById(int albumId) {
        Optional<SksAlbumDB> dbAlbum = albumsDao.findById(albumId);
        List<Photo> photos = dbAlbum
                .map(album -> photosConverter.convertToPhotos(album.getPhotos()))
                .orElse(new ArrayList<>());

        Album album = new Album();
        album.setPhotos(photos);
        return album;
    }

    @Override
    public Albums getAlbums() {
        final Albums albums = new Albums();
        final Iterable<SksAlbumDB> dbAlbums = albumsDao.findAll();
        albums.setAlbums(albumConverter.convertToJsonAlbums(dbAlbums));
        return albums;
    }
}
