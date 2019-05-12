import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import './Committee.css';
import * as CommitteeActions from '../../model/actions/CommitteeActions';
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

class Committee extends React.Component {
    constructor(context, props) {
        super(context, props);
        this.state = {}
    }

    componentDidMount() {
        this.props.processCommittee();
        this.props.getCommittee();
    }

    getContent(committee) {
        if(committee && committee.members) {
            return committee.members.map(member => {
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card member-details">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 member-profile">
                                            <img src={member.imageUrl} alt=""
                                                 className="member-photo rounded-circle img-fluid"/>
                                        </div>
                                        <div className="col-sm-9 pl-0 ml-0">
                                            <h5 className="mt-1 sks-committee-diaplyname">{member.displayName}</h5>
                                            <h6 className="text-muted">{member.role}</h6>
                                            <div>
                                                <p className="text-left mt-3">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <Loader type="Puff" color={'#F38E4B'} height="100" width="100"/>
                    </div>
                </div>
            )
        }
    }

    render() {
        const content = this.props.loadingCommittee ?
            <Loader type="Puff" color={'#F38E4B'} height="100" width="100"/> :
            this.getContent(this.props.committee);

        return (
            <div className={'sks-committee'}>
                <TitleSection title={'OUR COMMITTEE MEMBERS'}/>
                <div className={'sks-committee-inner'}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="members-header pb-4 pt-4">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dignissimos voluptatibus sequi minima id odio quaerat!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        loadingCommittee: state.committee.processingCommittee,
        committee: state.committee.committee
    }
};

const mapActionToProps = (dispatch) => {
    return {
        processCommittee: () => dispatch(CommitteeActions.processingCommittee()),
        getCommittee: () => dispatch(CommitteeActions.getCommittee())
    }
};

export default connect(mapStateToProps, mapActionToProps)(Committee);