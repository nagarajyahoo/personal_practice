import React from 'react';
import Some from "./some/Some";
import Hello from "./dummy/Hello";
import {Route, Switch} from "react-router";
import './SksMain.css';

export default class SksMain extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a href="index.html" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="gallery.html" className="nav-link">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a href="events.html" className="nav-link">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sks-login">
                            <ul>
                                <li>Register</li>
                                <li>Log In</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Switch>
                        <Route path='/hello' component={Hello}/>
                        <Route path='/some' component={Some}/>
                    </Switch>
                </section>
            </div>
        );
    }
}