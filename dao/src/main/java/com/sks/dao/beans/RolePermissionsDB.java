package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "role_permissions", schema = "sksmain", catalog = "")
@IdClass(RolePermissionsDBPK.class)
public class RolePermissionsDB {
    private int rolesId;
    private int permissionsId;

    @Id
    @Column(name = "roles_id", nullable = false)
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Id
    @Column(name = "permissions_id", nullable = false)
    public int getPermissionsId() {
        return permissionsId;
    }

    public void setPermissionsId(int permissionsId) {
        this.permissionsId = permissionsId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RolePermissionsDB that = (RolePermissionsDB) o;
        return rolesId == that.rolesId &&
                permissionsId == that.permissionsId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rolesId, permissionsId);
    }
}
