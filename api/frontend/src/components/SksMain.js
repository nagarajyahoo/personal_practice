import React from 'react';
import {Route, Switch} from "react-router";
import './SksMain.css';
import SksHome from "./skshome/SksHome";
import Header from "./header/Header";
import {Link} from "react-router-dom";
import {aboutUs} from "./aboutus/AboutUs";
import {gallery} from "./galleries/Gallery";
import {contactUs} from "./contactus/ContactUs";
import {events} from "./events/Events";
import * as SksFooter from './footer/SksFooter'
import Login from "./login/Login";

export default class SksMain extends React.Component {
    constructor(context) {
        super(context);
        this.state = {
            displaySignIn: false,
            backdrop: true,
        };
        this.toggleSignIn = this.toggleSignIn.bind(this);
    }

    toggleSignIn(display) {
        console.log('setting state ' + this.state.displaySignIn);
        this.setState({
            displaySignIn: display
        });
    }

    render() {
        return (
            <div className={'sksmain'}>
                <Header />
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                    <div className="container">
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/home'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/aboutus'}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/gallery'}>Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/events'}>Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/contactus'}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sks-login">
                            <ul>
                                <li><span onClick={() => this.toggleSignIn(true)}>Register</span></li>
                                <li><span onClick={() => this.toggleSignIn(true)}>Login</span></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Switch>
                        <Route exact path={'/'} component={SksHome} />
                        <Route exact path={'/home'} component={SksHome} />
                        <Route exact path={'/aboutus'} component={aboutUs} />
                        <Route exact path={'/gallery'} component={gallery} />
                        <Route exact path={'/events'} component={events} />
                        <Route exact path={'/contactus'} component={contactUs} />
                    </Switch>
                </section>
                <SksFooter.sksfooter />
                <Login isOpen={this.state.displaySignIn}
                       toggle={this.toggleSignIn}
                       backdrop={this.state.backdrop} />
            </div>
        );
    }
}