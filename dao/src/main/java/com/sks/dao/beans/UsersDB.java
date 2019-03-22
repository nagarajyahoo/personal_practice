package com.sks.dao.beans;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "users", schema = "sksmain", catalog = "")
@DynamicInsert
@DynamicUpdate
public class UsersDB {
    private int id;
    private String email;
    private String password;
    private Timestamp createTime;
    private Timestamp updateTime;
    private byte locked;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "email", nullable = false, length = 255)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "password", nullable = false, length = 255)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "create_time", nullable = false)
    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    @Basic
    @Column(name = "update_time", nullable = true)
    public Timestamp getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Timestamp updateTime) {
        this.updateTime = updateTime;
    }

    @Basic
    @Column(name = "locked", nullable = false)
    public byte getLocked() {
        return locked;
    }

    public void setLocked(byte locked) {
        this.locked = locked;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersDB usersDB = (UsersDB) o;
        return id == usersDB.id &&
                locked == usersDB.locked &&
                Objects.equals(email, usersDB.email) &&
                Objects.equals(password, usersDB.password) &&
                Objects.equals(createTime, usersDB.createTime) &&
                Objects.equals(updateTime, usersDB.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, createTime, updateTime, locked);
    }
}
