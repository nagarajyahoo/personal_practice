package com.sks.dao;

import com.sks.dao.beans.EventsDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsDao extends CrudRepository<EventsDB, Integer> {
}
