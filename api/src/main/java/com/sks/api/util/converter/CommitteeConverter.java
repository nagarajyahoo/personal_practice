package com.sks.api.util.converter;

import com.sks.api.model.Member;
import com.sks.dao.beans.CommitteeDB;
import com.sks.dao.beans.UserDetailsDB;

import java.util.List;
import java.util.stream.Collectors;

public class CommitteeConverter {
    public static List<Member> convertToJsonCommittee(List<CommitteeDB> dbCommittee) {
        return dbCommittee
                .stream()
                .map(CommitteeConverter::convertToJsonCommitteeMember)
                .collect(Collectors.toList());
    }

    private static Member convertToJsonCommitteeMember(CommitteeDB dbMember) {
        final Member member = new Member();
        UserDetailsDB user = dbMember.getSksUser().getUserDetails();
        member.setDisplayName(user.getFirstName() + " " + user.getLastName());
        member.setRole(dbMember.getCommitteeRole());
        member.setImageUrl(dbMember.getImageUrl());
        member.setDescription(dbMember.getDescription());
        return member;
    }
}
