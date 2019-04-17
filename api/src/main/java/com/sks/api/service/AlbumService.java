package com.sks.api.service;

import com.sks.api.model.Album;
import com.sks.api.model.Albums;

public interface AlbumService {
    Album getAlbumById(int albumId);

    Albums getAlbums();
}
