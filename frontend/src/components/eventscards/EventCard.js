import React from "react";
import {Card, CardBody} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import CardHeader from "reactstrap/es/CardHeader";
import './EventCard.css';

export default class EventCard extends React.Component {
    render() {
        return (
            <Card className={'skshome-event-card'}>
                <CardBody>
                    <Row>
                        <Col sm={5}>
                            <Card>
                                <CardHeader className={'skshome-event-card-title'}>
                                    Aug-2019
                                </CardHeader>
                                <CardBody className={'skshome-event-card-body'}>
                                    27
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={7}>
                            <div className={'skshome-event-details'}>Lorem ipsum dolor sit amet.</div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}