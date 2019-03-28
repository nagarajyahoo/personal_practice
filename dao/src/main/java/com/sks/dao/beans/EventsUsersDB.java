package com.sks.dao.beans;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "events_users", schema = "sksmain", catalog = "")
@IdClass(EventsUsersDBPK.class)
public class EventsUsersDB {
    private int usersId;
    private int eventsId;
    private byte paid;
    private String status;

    @Id
    @Column(name = "users_id", nullable = false)
    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventsUsersDB that = (EventsUsersDB) o;
        return usersId == that.usersId &&
                eventsId == that.eventsId &&
                paid == that.paid &&
                Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usersId, eventsId, paid, status);
    }
}
