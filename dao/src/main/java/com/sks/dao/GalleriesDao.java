package com.sks.dao;

import com.sks.dao.beans.SksAlbumDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleriesDao extends CrudRepository<SksAlbumDB, Integer> {
}
