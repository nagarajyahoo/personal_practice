package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_roles", schema = "sksmain", catalog = "")
@IdClass(UserRolesDBPK.class)
public class UserRolesDB {
    private int usersId;
    private int rolesId;

    @Id
    @Column(name = "users_id", nullable = false)
    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    @Id
    @Column(name = "roles_id", nullable = false)
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
        UserRolesDB that = (UserRolesDB) o;
        return usersId == that.usersId &&
                rolesId == that.rolesId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(usersId, rolesId);
    }
}
