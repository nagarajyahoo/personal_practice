import React from 'react';
import {Route, Switch} from "react-router";
import './SksMain.css';
import SksHome from "./skshome/SksHome";
import Header from "./header/Header";

export default class SksMain extends React.Component {
    render() {
        return (
            <div>
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
                    <SksHome />
                </section>
            </div>
        );
    }
}