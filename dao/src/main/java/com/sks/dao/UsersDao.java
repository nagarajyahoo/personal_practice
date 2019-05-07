package com.sks.dao;

import com.sks.dao.beans.SksRolesDB;
import com.sks.dao.beans.SksUsersDB;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersDao extends CrudRepository<SksUsersDB, Integer> {
    SksUsersDB findByEmail(String email);

    @Query("select u.roles from SksUsersDB u where u.email = :email")
    List<SksRolesDB> getRolesByEmail(@Param("email") String email);
}
