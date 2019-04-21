import React from 'react';
import {Route, Switch} from "react-router";
import './SksMain.css';
import SksHome from "./skshome/SksHome";
import Header from "./header/Header";
import {Link} from "react-router-dom";
import AboutUs from "./aboutus/AboutUs";
import ContactUs from "./contactus/ContactUs";
import {events} from "./events/Events";
import * as SksFooter from './footer/SksFooter'
import Login from "./login/Login";
import Gallery from "./galleries/Gallery";
import Register from "./register/Register";

export default class SksMain extends React.Component {
    constructor(context) {
        super(context);
        this.state = {
            displaySignIn: false,
            backdrop: true,
            tabId: '1',
            navItems: [
                {
                    id: '1',
                    name: 'Home',
                    link: '/home'
                },
                {
                    id: '2',
                    name: 'About Us',
                    link: '/aboutus'
                },
                {
                    id: '3',
                    name: 'Gallery',
                    link: '/gallery'
                },
                {
                    id: '4',
                    name: 'Events',
                    link: '/events'
                },
                {
                    id: '5',
                    name: 'Contact Us',
                    link: '/contactus'
                }
            ]
        };
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.navItems = this.navItems.bind(this);
    }

    toggleSignIn(display) {
        this.setState({
            displaySignIn: display
        });
    }

    selectTab(tabId) {
        localStorage.setItem('tabId', tabId);
        this.setState({
            tabId: tabId
        })
    }

    navItems() {
        const currpath = window.location.pathname === '/' ? '/home' : window.location.pathname;
        return this.state.navItems.map(navItem => {
            return (
                <li key={navItem.id} className={'nav-item'}>
                    <Link id={navItem.id}
                          onClick={() => this.selectTab(navItem.id)}
                          className={currpath === navItem.link ? 'nav-link active' : 'nav-link'}
                          to={navItem.link}>{navItem.name}</Link>
                </li>
            );
        })
    }

    render() {
        const nameItems = this.navItems();
        return (
            <div className={'sksmain'}>
                <Header/>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                    <div className="container">
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                {nameItems}
                            </ul>
                        </div>
                        <div className="sks-login">
                            <ul>
                                <li><Link to={'/register'}>Register</Link></li>
                                <li><span onClick={() => this.toggleSignIn(true)}>Login</span></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Switch>
                        <Route exact path={'/'} component={SksHome} selectTab={'1'}/>
                        <Route exact path={'/home'} component={SksHome} />
                        <Route exact path={'/aboutus'} component={AboutUs} />
                        <Route exact path={'/gallery'} component={Gallery} />
                        <Route exact path={'/events'} component={events} />
                        <Route exact path={'/contactus'} component={ContactUs} />
                        <Route exact path={'/register'} component={Register} />
                    </Switch>
                </section>
                <SksFooter.sksfooter/>
                <Login isOpen={this.state.displaySignIn}
                       toggle={this.toggleSignIn}
                       backdrop={this.state.backdrop}/>
            </div>
        );
    }
}