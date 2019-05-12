import React from 'react';
import './ContactUs.css';
import {Button, Row} from "reactstrap";
import Col from "reactstrap/es/Col";
import TitleSection from "../titlesec/TitleSection";

export default class ContactUs extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

    }

    render() {
        return (
            <div className="sks-contact-us">
                <TitleSection title={'WE ALWAYS WELCOME YOUR QUERIES, CONTACT US'}/>
                <div className="sks-contact-us-inner">
                    <Row>
                        <Col sm={10} md={4} lg={4} className={'card mr-4 ml-4 pt-4'}>
                            <div className={'card-body'}>
                                <h4>Get In Touch</h4>
                                <p className="text-muted">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                    rerum, laborum ab eos id optio!
                                </p>
                                <h5>Email</h5>
                                <p>
                                    <a href="mailto:scottishkarnatakasangha@gmail.com?Subject=ContactUs%20Query"
                                       target="_top">scottishkarnatakasangha@gmail.com</a>
                                </p>
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
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Name"
                                               onChange={() => this.handleChange()}/>
                                    </div>
                                    <div className="input-group input-group-lg mb-3">
                                        <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fas fa-envelope"/>
                                      </span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email"
                                               onChange={() => this.handleChange()}/>
                                    </div>
                                    <div className="input-group input-group-lg mb-3">
                                        <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fas fa-phone"/>
                                      </span>
                                        </div>
                                        <input type="phone" className="form-control" placeholder="Telephone"
                                               onChange={() => this.handleChange()}/>
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
                                    <Button color={'primary'} className={'btn-lg btn-block'}
                                            onClick={() => false}>Submit</Button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};