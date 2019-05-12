package com.sks.api.util.converter;

import com.sks.api.model.Member;
import com.sks.dao.beans.CommitteeDB;
import com.sks.dao.beans.UserDetailsDB;

import java.util.ArrayList;
import java.util.List;

public class CommitteeConverter {
    public static List<Member> convertToJsonCommittee(Iterable<CommitteeDB> dbCommittee) {
        final List<Member> committeeMembers = new ArrayList<>();
        dbCommittee.forEach(dbMember -> committeeMembers.add(convertToJsonCommittee(dbMember)));
        return committeeMembers;
    }

    private static Member convertToJsonCommittee(CommitteeDB dbMember) {
        final Member member = new Member();
        UserDetailsDB user = dbMember.getSksUser().getUserDetails();
        member.setDisplayName(user.getFirstName() + " " + user.getLastName());
        member.setRole(dbMember.getCommitteeRole());
        member.setImageUrl(dbMember.getImageUrl());
        member.setDescription(dbMember.getDescription());
        return member;
    }
}
