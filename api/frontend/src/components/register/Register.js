import React from 'react';
import {Form, Input, Col, Row, FormGroup, CustomInput, Button, Alert} from "reactstrap";
import './Register.css';
import TitleSection from "../titlesec/TitleSection";
import {connect} from "react-redux";
import * as Actions from '../../model/actions/RegistrationActions';

class Register extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.register = this.register.bind(this);
    }

    register() {
        const userDetails = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.telephone,
            sex: this.state.sex,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            postcode: this.state.postcode
        };
        this.props.registerUser(userDetails);
    }

    render() {
        const displayAlert = this.props.regSuccessful !== null;
        let registrationMsg;
        if (displayAlert) {
            const registrationMsgColor = this.props.regSuccessful ? 'success' : 'danger';
            const regMsg = 'Registration ' + (this.props.regSuccessful ? 'successful' : 'failed');
            registrationMsg = (
                <Alert color={registrationMsgColor}>
                    {regMsg}
                </Alert>
            );
        }
        return (
            <div>
                <TitleSection title={'REGISTER'}/>
                <div className={'sks-register'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <Form>
                                <div>
                                    {registrationMsg}
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="firstName"
                                                   id="firstName"
                                                   placeholder="First Name"
                                                   onChange={(e) => this.setState({firstName: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="lastName"
                                                   id="lastName"
                                                   placeholder="Last Name"
                                                   onChange={(e) => this.setState({lastName: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="email"
                                                   name="email"
                                                   id="userEmail"
                                                   placeholder="Email ID"
                                                   onChange={(e) => this.setState({email: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="password"
                                                   name="userPassword"
                                                   id="userPassword"
                                                   placeholder="Password"
                                                   onChange={(e) => this.setState({password: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="telephone"
                                                   id="telephone"
                                                   placeholder="Telephone"
                                                   onChange={(e) => this.setState({telephone: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <FormGroup inline>
                                            <CustomInput inline
                                                         type="radio"
                                                         id="exampleCustomRadio"
                                                         name={'user-sex'}
                                                         onChange={() => this.setState({sex: 'male'})}> Male </CustomInput>
                                            <CustomInput inline
                                                         type="radio"
                                                         id="exampleCustomRadio2"
                                                         name={'user-sex'}
                                                         onChange={() => this.setState({sex: 'female'})}> Female </CustomInput>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Input type="text"
                                           name="userAddress1"
                                           id="userAddress1"
                                           placeholder="Address Line 1"
                                           onChange={(e) => this.setState({address1: e.target.value})}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text"
                                           name="userAddress2"
                                           id="userAddress2"
                                           placeholder="Address Line 2"
                                           onChange={(e) => this.setState({address2: e.target.value})}/>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="userCity"
                                                   id="userCity"
                                                   placeholder="Current City"
                                                   onChange={(e) => this.setState({city: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="userZip"
                                                   id="userZip"
                                                   placeholder="Post Code"
                                                   onChange={(e) => this.setState({postCode: e.target.value})}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={5}/>
                                    <Col md={2}>
                                        <Button disabled={this.props.regInProgress}
                                                color={'primary'} className={'btn-md btn-block'}
                                                onClick={this.register}>Register</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        regInProgress: state.regReducer.regInProgress,
        regSuccessful: state.regReducer.regSuccessful
    }
};

const mapActionToProps = (dispatch) => {
    return {
        registrationInProgress: () => dispatch(Actions.registrationInProgress()),
        registerUser: (userDetails) => dispatch(Actions.registerUser(userDetails))
    }
};

export default connect(mapStateToProps, mapActionToProps)(Register);