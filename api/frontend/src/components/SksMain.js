import React from 'react';
import Some from "./some/Some";
import Hello from "./dummy/Hello";
import {Route, Switch} from "react-router";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import './SksMain.css';

export default class SksMain extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="favicon.ico" alt="" className={'rounded-circle'}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
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