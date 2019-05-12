import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import './Committee.css';

export default class Committee extends React.Component {
    render() {
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card member-details">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3 member-profile">
                                                <img
                                                    src="https://source.unsplash.com/random/150x150"
                                                    alt=""
                                                    className="member-photo rounded-circle img-fluid"
                                                />
                                            </div>
                                            <div className="col-sm-9 pl-0 ml-0">
                                                <h5 className="mt-1">Susan Williams</h5>
                                                <h6 className="text-muted">Lead Writer</h6>
                                                <div>
                                                    <p className="text-left mt-3">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing
                                                        elit. Inventore nihil obcaecati consequuntur ducimus
                                                        eaque cupiditate aspernatur laudantium aperiam qui sit
                                                        at cum, ipsa id saepe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <div className="card member-details">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3 member-profile">
                                                <img src="https://source.unsplash.com/random/151x150" alt=""
                                                     className="member-photo rounded-circle img-fluid"/>
                                            </div>
                                            <div className="col-sm-9 pl-0 ml-0">
                                                <h5 className="mt-1">Susan Williams</h5>
                                                <h6 className="text-muted">Lead Writer</h6>
                                                <div>
                                                    <p className="text-left mt-3">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing
                                                        elit. Inventore nihil obcaecati consequuntur ducimus
                                                        eaque cupiditate aspernatur laudantium aperiam qui sit
                                                        at cum, ipsa id saepe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};