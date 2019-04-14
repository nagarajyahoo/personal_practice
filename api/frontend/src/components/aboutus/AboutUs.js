import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import './About.css';

export const aboutUs = () => {
    return (
        <div className={'sks-about'}>
            <TitleSection title={'WANT TO KNOW MORE ABOUT US ?'}/>
            <Row>
                <Col>
                    <div className={'sks-about-details'}>
                        <p className="lead pb-4 pt-4">
                            Scottish Karnataka Sangha is a socio-cultural organisation formed by the people of Karnataka
                            (Indian) origin residing in various cities of Scotland, to promote the kannada - culture
                            tradition and values.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};