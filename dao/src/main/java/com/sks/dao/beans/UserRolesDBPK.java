package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class UserRolesDBPK implements Serializable {
    private int rolesId;
    private int sksUsersId;

    @Column(name = "roles_id", nullable = false)
    @Id
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Column(name = "sks_users_id", nullable = false)
    @Id
    public int getSksUsersId() {
        return sksUsersId;
    }

    public void setSksUsersId(int sksUsersId) {
        this.sksUsersId = sksUsersId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRolesDBPK that = (UserRolesDBPK) o;
        return rolesId == that.rolesId &&
                sksUsersId == that.sksUsersId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rolesId, sksUsersId);
    }
}
