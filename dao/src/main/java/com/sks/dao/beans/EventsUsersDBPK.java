package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class EventsUsersDBPK implements Serializable {
    private int eventsId;
    private int sksUsersId;

    @Column(name = "events_id", nullable = false)
    @Id
    public int getEventsId() {
        return eventsId;
    }

    public void setEventsId(int eventsId) {
        this.eventsId = eventsId;
    }

    @Column(name = "sks_users_id", nullable = false)
    @Id
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
        EventsUsersDBPK that = (EventsUsersDBPK) o;
        return eventsId == that.eventsId &&
                sksUsersId == that.sksUsersId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventsId, sksUsersId);
    }
}
