import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return(
            <header className="header-expand-md sks-header fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 sks-icon">
                            <img src="favicon.ico" alt={'favicon'} className="img-fluid rounded-circle sks-logo"/>
                        </div>
                        <div className="col-sm-6">
                            <div className="container text-white mt-2">
                                <div className="row">
                                    <div className="col text-center">
                                        <h2>
                                            <u>ಸ್ಕಾಟಿಷ್ ಕರ್ನಾಟಕ ಸಂಘ</u>
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <h5>Scottish Karnataka Sangha</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 align-self-center">
                            <div className="container text-right">
                                <div className="row">
                                    <div className="col">
                                        <i className="fab fa-facebook-f fa-lg sks-social-icon"
                                           onClick={() => window.open('https://www.facebook.com/ScottishKarnatakaSangha/', '_blank')}>
                                        </i>
                                        &nbsp;&nbsp;
                                        <i className="fab fa-youtube-square fa-lg sks-social-icon"
                                           onClick={() => window.open('https://www.youtube.com/user/scottkarnatakasangha', '_blank')}>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}