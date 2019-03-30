package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "events_users", schema = "sksmain", catalog = "")
@IdClass(EventsUsersDBPK.class)
public class EventsUsersDB {
    private int eventsId;
    private byte paid;
    private String status;
    private int sksUsersId;

    @Id
    @Column(name = "events_id", nullable = false)
    public int getEventsId() {
        return eventsId;
    }

    public void setEventsId(int eventsId) {
        this.eventsId = eventsId;
    }

    @Basic
    @Column(name = "paid", nullable = false)
    public byte getPaid() {
        return paid;
    }

    public void setPaid(byte paid) {
        this.paid = paid;
    }

    @Basic
    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
        EventsUsersDB that = (EventsUsersDB) o;
        return eventsId == that.eventsId &&
                paid == that.paid &&
                sksUsersId == that.sksUsersId &&
                Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventsId, paid, status, sksUsersId);
    }
}
