package com.sks.dao.beans;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "achievements", schema = "sksmain", catalog = "")
public class AchievementsDB {
    private int id;
    private String name;
    private int achievementCount;
    private Timestamp createTime;
    private Timestamp updateTime;

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
    @Column(name = "achievement_count", nullable = false)
    public int getAchievementCount() {
        return achievementCount;
    }

    public void setAchievementCount(int achievementCount) {
        this.achievementCount = achievementCount;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AchievementsDB that = (AchievementsDB) o;
        return id == that.id &&
                achievementCount == that.achievementCount &&
                Objects.equals(name, that.name) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(updateTime, that.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, achievementCount, createTime, updateTime);
    }
}
