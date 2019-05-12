package com.sks.api.service;

import com.sks.api.model.Committee;
import com.sks.api.util.converter.CommitteeConverter;
import com.sks.dao.CommitteeDao;
import com.sks.dao.beans.CommitteeDB;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

@Service
public class CommitteeServiceImpl implements CommitteeService {
    private final CommitteeDao committeeDao;
    private final CommitteeConverter committeeConverter;

    @Inject
    public CommitteeServiceImpl(final CommitteeDao committeeDao,
                                final CommitteeConverter committeeConverter) {
        this.committeeDao = committeeDao;
        this.committeeConverter = committeeConverter;
    }

    @Override
    public Committee getCommittee() {
        final Committee committee = new Committee();
        List<CommitteeDB> dbCommittee = committeeDao.getCommitteeMembers();
        committee.setMembers(committeeConverter.convertToJsonCommittee(dbCommittee));
        return committee;
    }
}
