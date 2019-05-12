package com.sks.dao;

import com.sks.dao.beans.CommitteeDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommitteeDao extends CrudRepository<CommitteeDB, Integer> {
}
