package com.sks.dao.beans;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "events", schema = "sksmain", catalog = "")
public class EventsDB {
    private int id;
    private String name;
    private String description;
    private Timestamp eventDate;
    private BigDecimal amount;
    private Timestamp createTime;
    private Timestamp updateTime;
    private List<SksAlbumDB> albums;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 255)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description", nullable = false, length = -1)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "event_date", nullable = false)
    public Timestamp getEventDate() {
        return eventDate;
    }

    public void setEventDate(Timestamp eventDate) {
        this.eventDate = eventDate;
    }

    @Basic
    @Column(name = "amount", nullable = false, precision = 2)
    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
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

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "event")
    public List<SksAlbumDB> getAlbums() {
        return albums;
    }

    public void setAlbums(List<SksAlbumDB> albums) {
        this.albums = albums;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventsDB eventsDB = (EventsDB) o;
        return id == eventsDB.id &&
                Objects.equals(name, eventsDB.name) &&
                Objects.equals(description, eventsDB.description) &&
                Objects.equals(eventDate, eventsDB.eventDate) &&
                Objects.equals(amount, eventsDB.amount) &&
                Objects.equals(createTime, eventsDB.createTime) &&
                Objects.equals(updateTime, eventsDB.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, eventDate, amount, createTime, updateTime);
    }
}
