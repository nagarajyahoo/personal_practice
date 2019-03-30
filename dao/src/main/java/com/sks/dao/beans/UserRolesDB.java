package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_roles", schema = "sksmain", catalog = "")
@IdClass(UserRolesDBPK.class)
public class UserRolesDB {
    private int rolesId;
    private int sksUsersId;

    @Id
    @Column(name = "roles_id", nullable = false)
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Id
    @Column(name = "sks_users_id", nullable = false)
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
        UserRolesDB that = (UserRolesDB) o;
        return rolesId == that.rolesId &&
                sksUsersId == that.sksUsersId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rolesId, sksUsersId);
    }
}
