package com.sks.dao.beans;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "sks_album", schema = "sksmain", catalog = "")
public class SksAlbumDB {
    private int id;
    private String name;
    private Timestamp createTime;
    private Timestamp updateTime;
    private String albumKey;
    private String albumUrl;
    private String source;
    private EventsDB event;
    private List<SksAlbumPhotosDB> photos;

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

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "album")
    public List<SksAlbumPhotosDB> getPhotos() {
        return photos;
    }

    public void setPhotos(List<SksAlbumPhotosDB> photos) {
        this.photos = photos;
    }

    @ManyToOne
    @JoinColumn(name = "events_id")
    public EventsDB getEvent() {
        return event;
    }

    public void setEvent(EventsDB event) {
        this.event = event;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SksAlbumDB that = (SksAlbumDB) o;
        return id == that.id &&
                Objects.equals(name, that.name) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(updateTime, that.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, createTime, updateTime);
    }

    @Basic
    @Column(name = "album_key", nullable = true, length = 255)
    public String getAlbumKey() {
        return albumKey;
    }

    public void setAlbumKey(String albumKey) {
        this.albumKey = albumKey;
    }

    @Basic
    @Column(name = "album_url", nullable = true, length = -1)
    public String getAlbumUrl() {
        return albumUrl;
    }

    public void setAlbumUrl(String albumUrl) {
        this.albumUrl = albumUrl;
    }

    @Basic
    @Column(name = "source", nullable = false, length = 255)
    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
}
