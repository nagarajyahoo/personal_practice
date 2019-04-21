import React from 'react';
import {Form, Input, Col, Row, FormGroup, CustomInput, Button} from "reactstrap";
import './Register.css';
import TitleSection from "../titlesec/TitleSection";
import CardHeader from "reactstrap/es/CardHeader";

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <TitleSection title={'REGISTER'}/>
                <div className={'sks-register'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="email" name="email" id="userEmail" placeholder="Email ID" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="password" name="userPassword" id="userPassword" placeholder="Password" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <FormGroup inline>
                                            <CustomInput inline type="radio" id="exampleCustomRadio" name={'user-sex'}> Male </CustomInput>
                                            <CustomInput inline type="radio" id="exampleCustomRadio2" name={'user-sex'}> Female </CustomInput>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Input type="text" name="userAddress1" id="userAddress1" placeholder="Address Line 1"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="userAddress2" id="userAddress2" placeholder="Address Line 2"/>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="userCity" id="userCity" placeholder="Current City"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Input type="text" name="userZip" id="userZip" placeholder="Post Code"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={5}/>
                                    <Col md={2}>
                                        <Button color={'primary'} className={'btn-md btn-block'} onClick={ () => false}>Register</Button>
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