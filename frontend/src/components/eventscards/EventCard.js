import React from "react";
import {Card, CardBody, Button} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import CardHeader from "reactstrap/es/CardHeader";
import './EventCard.css';
import CardFooter from "reactstrap/es/CardFooter";

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
                            <Card className={'skshome-event-details'}>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptatem.
                                </CardBody>
                                <CardFooter>
                                    <Button outline color={'primary'} size={'sm'}>More Info</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}