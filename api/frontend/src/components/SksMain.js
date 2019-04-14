import React from 'react';
import {Route, Switch} from "react-router";
import './SksMain.css';
import SksHome from "./skshome/SksHome";
import Header from "./header/Header";
import {Link, NavLink} from "react-router-dom";
import {aboutUs} from "./aboutus/AboutUs";
import {gallery} from "./galleries/Gallery";
import {contactUs} from "./contactus/ContactUs";
import {events} from "./events/Events";

export default class SksMain extends React.Component {
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
                                <li><a href={'/register'}>Register</a> </li>
                                <li><a href={'/login'}>Login</a> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Switch>
                        <Route exact={'true'} path={'/home'} component={SksHome} />
                        <Route exact={'true'} path={'/aboutus'} component={aboutUs} />
                        <Route exact={'true'} path={'/gallery'} component={gallery} />
                        <Route exact={'true'} path={'/events'} component={events} />
                        <Route exact={'true'} path={'/contactus'} component={contactUs} />
                    </Switch>
                </section>
            </div>
        );
    }
}