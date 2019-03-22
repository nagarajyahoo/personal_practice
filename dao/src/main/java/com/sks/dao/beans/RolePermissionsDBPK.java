package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class RolePermissionsDBPK implements Serializable {
    private int rolesId;
    private int permissionsId;

    @Column(name = "roles_id", nullable = false)
    @Id
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Column(name = "permissions_id", nullable = false)
    @Id
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
        RolePermissionsDBPK that = (RolePermissionsDBPK) o;
        return rolesId == that.rolesId &&
                permissionsId == that.permissionsId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rolesId, permissionsId);
    }
}
