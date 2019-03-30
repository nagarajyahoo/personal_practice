package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class RolePermissionsDBPK implements Serializable {
    private int sksRolesId;
    private int sksPermissionsId;

    @Column(name = "sks_roles_id", nullable = false)
    @Id
    public int getSksRolesId() {
        return sksRolesId;
    }

    public void setSksRolesId(int sksRolesId) {
        this.sksRolesId = sksRolesId;
    }

    @Column(name = "sks_permissions_id", nullable = false)
    @Id
    public int getSksPermissionsId() {
        return sksPermissionsId;
    }

    public void setSksPermissionsId(int sksPermissionsId) {
        this.sksPermissionsId = sksPermissionsId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RolePermissionsDBPK that = (RolePermissionsDBPK) o;
        return sksRolesId == that.sksRolesId &&
                sksPermissionsId == that.sksPermissionsId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(sksRolesId, sksPermissionsId);
    }
}
