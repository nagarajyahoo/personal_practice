import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <header className="header-expand-md sks-header fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 align-self-center">
                            <img src="favicon.ico" alt={'favicon'} className="img-fluid rounded-circle sks-logo"/>
                        </div>
                        <div className="col-md-6">
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
                        <div className="col-md-3 align-self-center">
                            <div className="container text-right">
                                <div className="row">
                                    <div className="col">
                                        <i className="fab fa-facebook-f fa-lg"></i>&nbsp;&nbsp;
                                        <i className="fab fa-youtube-square fa-lg"></i>
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