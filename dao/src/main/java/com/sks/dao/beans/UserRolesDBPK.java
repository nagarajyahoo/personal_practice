package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class UserRolesDBPK implements Serializable {
    private int usersId;
    private int rolesId;

    @Column(name = "users_id", nullable = false)
    @Id
    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    @Column(name = "roles_id", nullable = false)
    @Id
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRolesDBPK that = (UserRolesDBPK) o;
        return usersId == that.usersId &&
                rolesId == that.rolesId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(usersId, rolesId);
    }
}
