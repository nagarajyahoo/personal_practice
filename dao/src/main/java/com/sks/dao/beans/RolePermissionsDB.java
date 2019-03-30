package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "role_permissions", schema = "sksmain", catalog = "")
@IdClass(RolePermissionsDBPK.class)
public class RolePermissionsDB {
    private int sksRolesId;
    private int sksPermissionsId;

    @Id
    @Column(name = "sks_roles_id", nullable = false)
    public int getSksRolesId() {
        return sksRolesId;
    }

    public void setSksRolesId(int sksRolesId) {
        this.sksRolesId = sksRolesId;
    }

    @Id
    @Column(name = "sks_permissions_id", nullable = false)
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
        RolePermissionsDB that = (RolePermissionsDB) o;
        return sksRolesId == that.sksRolesId &&
                sksPermissionsId == that.sksPermissionsId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(sksRolesId, sksPermissionsId);
    }
}
