package com.sks.api.service;

import com.sks.api.model.Committee;
import com.sks.dao.CommitteeDao;
import com.sks.dao.beans.CommitteeDB;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class CommitteeServiceImpl implements CommitteeService {
    private final CommitteeDao committeeDao;

    @Inject
    public CommitteeServiceImpl(CommitteeDao committeeDao) {
        this.committeeDao = committeeDao;
    }

    @Override
    public Committee getCommittee() {
        Iterable<CommitteeDB> dbCommittee = committeeDao.findAll();
        return null;
    }
}
