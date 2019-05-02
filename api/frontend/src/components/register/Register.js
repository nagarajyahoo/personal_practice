import React from 'react';
import {Alert, Button, Col, CustomInput, Form, FormFeedback, FormGroup, Input, Row} from "reactstrap";
import './Register.css';
import TitleSection from "../titlesec/TitleSection";
import {connect} from "react-redux";
import * as Actions from '../../model/actions/RegistrationActions';

class Register extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errorFields: [],
            userDetails: {
                email: null,
                password: null,
                firstName: null,
                lastName: null,
                phone: null,
                sex: null,
                address1: null,
                address2: null,
                city: null,
                postcode: null
            }
        };
        this.register = this.register.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.isInvalid = this.isInvalid.bind(this);
    }

    register(e) {
        e.preventDefault();
        this.props.clearRegistration();
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

        this.setState({
            userDetails: userDetails
        });

        const errors = this.validateForm(userDetails);

        if (errors.length === 0) {
            this.props.registerUser(userDetails);
        }
    }

    validateForm(userDetails) {
        const fields = Object.keys(this.state.userDetails);
        const errors = [];
        fields.forEach(field => {
            switch (field) {
                case 'email':
                case 'password':
                case 'firstName':
                case 'lastName':
                case 'phone':
                case 'city':
                case 'postcode':
                    const value = userDetails[field];
                    if (value === undefined || value === null || value.trim() === '') {
                        errors.push(field);
                    }
                    break;
                default:
                    break;
            }
        });
        this.setState({
            errorFields: errors
        });
        return errors;
    }

    isInvalid(field) {
        return (this.state.errorFields.indexOf(field) !== -1);
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
                            <Form onSubmit={this.register}>
                                <div>
                                    {registrationMsg}
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="firstName"
                                                   id="firstName"
                                                   invalid={this.isInvalid('firstName')}
                                                   placeholder='First Name'
                                                   onChange={(e) => this.setState({firstName: e.target.value})}/>
                                            <FormFeedback>{'First Name is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="lastName"
                                                   id="lastName"
                                                   invalid={this.isInvalid('lastName')}
                                                   placeholder="Last Name"
                                                   onChange={(e) => this.setState({lastName: e.target.value})}/>
                                            <FormFeedback>{'Last Name is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="email"
                                                   name="email"
                                                   id="userEmail"
                                                   invalid={this.isInvalid('email')}
                                                   placeholder="Email ID"
                                                   onChange={(e) => this.setState({email: e.target.value})}/>
                                            <FormFeedback>{'Email ID is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="password"
                                                   name="userPassword"
                                                   id="userPassword"
                                                   invalid={this.isInvalid('password')}
                                                   placeholder="Password"
                                                   onChange={(e) => this.setState({password: e.target.value})}/>
                                            <FormFeedback>{'Password is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="telephone"
                                                   id="telephone"
                                                   invalid={this.isInvalid('phone')}
                                                   placeholder="Telephone"
                                                   onChange={(e) => this.setState({telephone: e.target.value})}/>
                                            <FormFeedback>{'Telephone is required'}</FormFeedback>
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
                                                   invalid={this.isInvalid('city')}
                                                   placeholder="Current City"
                                                   onChange={(e) => this.setState({city: e.target.value})}/>
                                            <FormFeedback>{'City is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Input type="text"
                                                   name="userZip"
                                                   id="userZip"
                                                   invalid={this.isInvalid('postcode')}
                                                   placeholder="Post Code"
                                                   onChange={(e) => this.setState({postcode: e.target.value})}/>
                                            <FormFeedback>{'Post Code is required'}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={5}/>
                                    <Col md={2}>
                                        <Button disabled={this.props.regInProgress}
                                                color={'primary'} className={'btn-md btn-block'}
                                                onClick={(e) => this.register(e)}>
                                            Register
                                        </Button>
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
        clearRegistration: () => dispatch(Actions.clearRegistration()),
        registerUser: (userDetails) => dispatch(Actions.registerUser(userDetails))
    }
};

export default connect(mapStateToProps, mapActionToProps)(Register);