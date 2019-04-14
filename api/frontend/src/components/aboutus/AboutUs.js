import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

export const aboutUs = () => {
    return (
        <div className={'container'}>
            <Row>
                <Col>
                    <TitleSection title={'About Us'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>About Us</div>
                </Col>
            </Row>
        </div>
    );
};