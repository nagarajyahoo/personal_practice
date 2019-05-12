package com.sks.dao;

import com.sks.dao.beans.CommitteeDB;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommitteeDao extends CrudRepository<CommitteeDB, Integer> {
    @Query("select c from CommitteeDB c inner join fetch c.sksUser")
    List<CommitteeDB> getCommitteeMembers();
}
