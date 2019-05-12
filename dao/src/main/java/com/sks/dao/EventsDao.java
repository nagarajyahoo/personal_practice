package com.sks.dao;

import com.sks.dao.beans.EventsDB;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface EventsDao extends CrudRepository<EventsDB, Integer> {
    @Query("select e from EventsDB e where e.eventDate >= :endTime")
    List<EventsDB> getEventsByDate(@Param("endTime") Timestamp endTime);
}
