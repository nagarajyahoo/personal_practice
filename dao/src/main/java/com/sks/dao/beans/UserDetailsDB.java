package com.sks.dao.beans;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "user_details", schema = "sksmain", catalog = "")
@DynamicInsert
@DynamicUpdate
public class UserDetailsDB {
    private String phone;
    private String firstName;
    private String lastName;
    private Timestamp createTime;
    private Timestamp updateTime;
    private int sksUsersId;
    private SksUsersDB sksUser;
    private Byte sex;
    private String city;
    private String postcode;
    private String address1;
    private String address2;

    @Basic
    @Column(name = "phone", nullable = false, length = 45)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "first_name", nullable = false, length = 255)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "last_name", nullable = false, length = 255)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    @Id
    @Column(name = "sks_users_id", nullable = false)
    public int getSksUsersId() {
        return sksUsersId;
    }

    public void setSksUsersId(int sksUsersId) {
        this.sksUsersId = sksUsersId;
    }

    @OneToOne
    @JoinColumn(name = "sks_users_id")
    @MapsId
    public SksUsersDB getSksUser() {
        return sksUser;
    }

    public void setSksUser(SksUsersDB sksUser) {
        this.sksUser = sksUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDetailsDB that = (UserDetailsDB) o;
        return sksUsersId == that.sksUsersId &&
                Objects.equals(phone, that.phone) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(updateTime, that.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(phone, firstName, lastName, createTime, updateTime, sksUsersId);
    }

    @Basic
    @Column(name = "sex", nullable = true)
    public Byte getSex() {
        return sex;
    }

    public void setSex(Byte sex) {
        this.sex = sex;
    }

    @Basic
    @Column(name = "city", nullable = true, length = 255)
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "postcode", nullable = true, length = 45)
    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    @Basic
    @Column(name = "address1", nullable = true, length = -1)
    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    @Basic
    @Column(name = "address2", nullable = true, length = -1)
    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }
}
