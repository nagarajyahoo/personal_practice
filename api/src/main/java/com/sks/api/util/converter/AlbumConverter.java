package com.sks.api.util.converter;

import com.sks.api.model.Album;
import com.sks.dao.beans.SksAlbumDB;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlbumConverter {
    public List<Album> convertToJsonAlbums(Iterable<SksAlbumDB> dbAlbums) {
        final List<Album> albums = new ArrayList<>();
        dbAlbums.forEach(dbAlbum -> {
            albums.add(convertToJsonAlbum(dbAlbum));
        });
        return albums;
    }

    private Album convertToJsonAlbum(SksAlbumDB dbAlbum) {
        Album album = new Album();
        album.setId(dbAlbum.getId());
        album.setName(dbAlbum.getName());
        album.setUrl(dbAlbum.getAlbumUrl());
        album.setKey(dbAlbum.getAlbumKey());
        return album;
    }
}
