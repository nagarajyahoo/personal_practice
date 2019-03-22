package com.sks.dao;

import com.sks.dao.beans.UsersDB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDao extends CrudRepository<UsersDB, Integer> {
    UsersDB findByEmail(String email);
}
