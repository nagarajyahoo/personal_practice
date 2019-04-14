import React from 'react';
import './ContactUs.css';
import {Row} from "reactstrap";
import Col from "reactstrap/es/Col";
import TitleSection from "../titlesec/TitleSection";

export const contactUs = () => {
    return (
        <div className="sks-contact-us">
            <TitleSection title={'WE ALWAYS WELCOME YOUR QUERIES, CONTACT US'}/>
            <Row>
                <Col sm={10} md={4} lg={4} className={'card mr-4 ml-4'}>
                    <div className={'card-body'}>
                        <h4>Get In Touch</h4>
                        <p className="text-muted">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            rerum, laborum ab eos id optio!
                        </p>
                        <h5>Address</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h5>Email</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h5>Telephone</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
                <Col sm={12} md={7} lg={7} className={'card p-4'}>
                    <div className={'card-body'}>
                        <h3>Please fill out this form</h3>
                        <form>
                            <div className="input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fas fa-user"/>
                                      </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fas fa-envelope"/>
                                      </span>
                                </div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fas fa-phone"/>
                                      </span>
                                </div>
                                <input type="phone" className="form-control" placeholder="Telephone"/>
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fas fa-pencil-alt"/>
                              </span>
                                </div>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    rows="3"/>
                            </div>
                            <input
                                type="Submit"
                                value="Submit"
                                className="btn btn-primary btn-lg btn-block"
                            />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};