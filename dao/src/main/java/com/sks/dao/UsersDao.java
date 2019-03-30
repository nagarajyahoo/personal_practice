package com.sks.dao;

import com.sks.dao.beans.SksUsersDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDao extends CrudRepository<SksUsersDB, Integer> {
    SksUsersDB findByEmail(String email);
}
