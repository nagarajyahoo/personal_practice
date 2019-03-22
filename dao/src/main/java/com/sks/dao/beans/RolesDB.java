package com.sks.dao.beans;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "roles", schema = "sksmain", catalog = "")
public class RolesDB {
    private int id;
    private String role;
    private Timestamp createTime;
    private Timestamp updateTime;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "role", nullable = false, length = 255)
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RolesDB rolesDB = (RolesDB) o;
        return id == rolesDB.id &&
                Objects.equals(role, rolesDB.role) &&
                Objects.equals(createTime, rolesDB.createTime) &&
                Objects.equals(updateTime, rolesDB.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, role, createTime, updateTime);
    }
}
