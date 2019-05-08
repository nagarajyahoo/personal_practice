import React from 'react';
import {connect} from 'react-redux';
import * as AuthActions from '../../model/actions/LoginActions';
import {Button, Col, Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import Input from "reactstrap/es/Input";
import {withRouter} from "react-router";

class Login extends React.Component {
    constructor(context) {
        super(context);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    inputChangeHandler = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    };

    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                   toggle={this.props.toggle}
                   className={this.props.className}
                   backdrop={this.props.backdrop}>
                <Form onSubmit={this.onSubmit}>
                    <ModalHeader toggle={this.toggle}>Log In to your Account</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col sm={12}>
                                {this.props.error ? <p className="alert alert-danger">{this.props.error} </p> : null}
                                <FormGroup row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Input type={'email'}
                                               placeholder={'Enter Email Id'}
                                               onChange={(event) => this.inputChangeHandler(event, 'username')}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Input type={'password'}
                                               placeholder={'Password'}
                                               onChange={(event) => this.inputChangeHandler(event, 'password')}/>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={(e) => this.onSubmit(e)}>Login</Button>{' '}
                        <Button color="secondary" onClick={() => this.props.toggle(false)}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.login.token,
        userId: state.login.userId,
        error: state.login.error,
        loggedIn: state.login.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userId, password) => dispatch(AuthActions.login(userId, password))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));