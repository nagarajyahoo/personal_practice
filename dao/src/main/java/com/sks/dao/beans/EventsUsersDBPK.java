package com.sks.dao.beans;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class EventsUsersDBPK implements Serializable {
    private int usersId;
    private int eventsId;

    @Column(name = "users_id", nullable = false)
    @Id
    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    @Column(name = "events_id", nullable = false)
    @Id
    public int getEventsId() {
        return eventsId;
    }

    public void setEventsId(int eventsId) {
        this.eventsId = eventsId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventsUsersDBPK that = (EventsUsersDBPK) o;
        return usersId == that.usersId &&
                eventsId == that.eventsId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(usersId, eventsId);
    }
}
