import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import './About.css';

const aboutUs = () => {
    return (
        <div className={'sks-about'}>
            <TitleSection title={'WANT TO KNOW MORE ABOUT US ?'}/>
            <div className={'sks-about-inner'}>
                <Row>
                    <Col>
                        <div className={'sks-about-details'}>
                            <p className="lead pb-4 pt-4">
                                Scottish Karnataka Sangha is a socio-cultural and non-profit organisation formed by the people of Karnataka
                                (Indian) origin residing in various cities of Scotland, to promote the kannada - culture
                                tradition and values.
                            </p>
                        </div>
                        <div className={'sks-about-mission'}>
                            <div className={'sks-about-mission-header'}>Founded In</div>
                            <div className={'sks-about-founded-details lead'}>November 2002</div>
                        </div>
                        <div className={'sks-about-mission'}>
                            <div className={'sks-about-mission-header'}>Our Mission</div>
                            <div className={'sks-about-mission-details'}>
                                <ul>
                                    <li>Promote, facilitate, organise and participate in cultural, educational, charity and
                                        other activities for the benefit of Kannadigas resident in Scotland, and revitalise
                                        and
                                        revive Indian traditions including, in particular the Karnataka traditions amongst
                                        its
                                        members, the future generation and the local community who are interested in Indian
                                        culture.
                                    </li>
                                    <li>To maintain a regularly updated register of its members to facilitate socio-cultural
                                        activities.
                                    </li>
                                    <li>Offer support and advice to new entrants from Karnataka to the United Kingdom.</li>
                                    <li>Promote members to be ambassadors of Karnataka in Scotland, and bridging the gap
                                        between
                                        East and West.
                                    </li>
                                    <li>Encourage youngsters to become integral part of the Scottish Community and at the
                                        same
                                        time to uphold the culture, tradition and values of Karnataka and India.
                                    </li>
                                    <li>Promote Kannada language in every possible way</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default aboutUs;