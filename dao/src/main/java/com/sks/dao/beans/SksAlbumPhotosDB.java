package com.sks.dao.beans;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "sks_album_photos", schema = "sksmain", catalog = "")
public class SksAlbumPhotosDB {
    private int id;
    private String photoCaption;
    private String description;
    private String photUrl;
    private Timestamp createTime;
    private Timestamp updateTime;
    private SksAlbumDB album;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "photo_caption", nullable = true, length = 45)
    public String getPhotoCaption() {
        return photoCaption;
    }

    public void setPhotoCaption(String photoCaption) {
        this.photoCaption = photoCaption;
    }

    @Basic
    @Column(name = "description", nullable = true, length = 45)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "phot_url", nullable = true, length = 45)
    public String getPhotUrl() {
        return photUrl;
    }

    public void setPhotUrl(String photUrl) {
        this.photUrl = photUrl;
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

    @ManyToOne
    @JoinColumn(name = "sks_album_id")
    public SksAlbumDB getAlbum() {
        return album;
    }

    public void setAlbum(SksAlbumDB album) {
        this.album = album;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SksAlbumPhotosDB that = (SksAlbumPhotosDB) o;
        return id == that.id &&
                Objects.equals(photoCaption, that.photoCaption) &&
                Objects.equals(description, that.description) &&
                Objects.equals(photUrl, that.photUrl) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(updateTime, that.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, photoCaption, description, photUrl, createTime, updateTime);
    }
}
