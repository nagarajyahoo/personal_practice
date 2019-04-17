package com.sks.dao;

import com.sks.dao.beans.SksAlbumDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumsDao extends CrudRepository<SksAlbumDB, Integer> {
}
