import React from 'react';
import {Route, Switch} from "react-router";
import './SksMain.css';
import SksHome from "./skshome/SksHome";
import Header from "./header/Header";
import {Link} from "react-router-dom";
import AboutUs from "./aboutus/AboutUs";
import ContactUs from "./contactus/ContactUs";
import Committee from "./committee/Committee";
import * as SksFooter from './footer/SksFooter'
import Login from "./login/Login";
import Gallery from "./galleries/Gallery";
import Register from "./register/Register";
import * as AuthActions from "../model/actions/LoginActions";
import {connect} from "react-redux";
import * as httputils from '../utils/HttpUtils';
import * as tabutils from '../utils/TabUtils';
import ManageUsers from "./admin/users/ManageUsers";
import {isSubMenuPath} from "../utils/TabUtils";

class SksMain extends React.Component {
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
                    name: 'Committee',
                    link: '/committee'
                },
                {
                    id: '5',
                    name: 'Contact Us',
                    link: '/contactus'
                }
            ],
            adminItems: [
                {
                    id: 'a-1',
                    name: 'Members',
                    link: '/managemembers'
                },
                {
                    id: 'a-3',
                    name: 'Events',
                    link: '/manageevents'
                },
                {
                    id: 'a-2',
                    name: 'Payments',
                    link: '/managepayments',
                    submenus: [
                        {
                            id: 'a-2-1',
                            name: 'Payments Report',
                            link: '/paymentreports'
                        },
                        {
                            id: 'a-2-2',
                            name: 'Add/Refund Payment',
                            link: '/addpayment'
                        }
                    ]
                }
            ]
        };
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.navItems = this.navItems.bind(this);
        this.createSignInLink = this.createSignInLink.bind(this);
        this.signOut = this.signOut.bind(this);
        this.adminTab = this.adminTab.bind(this);
    }

    componentDidMount() {
        this.props.checkUserRole();
    }

    toggleSignIn(display) {
        this.setState({
            displaySignIn: display
        });
    }

    selectTab(tabId) {
        this.setState({
            tabId: tabId
        })
    }

    signOut() {
        this.toggleSignIn(false);
        this.props.logout();
    }

    createSubMenus(subMenuItems) {
        return subMenuItems.map(subMenu => {
            return (
                <li key={subMenu.id}>
                    <Link
                        key={subMenu.id}
                        onClick={() => this.selectTab(subMenu.id)}
                        className={'dropdown-item'}
                        to={subMenu.link}>
                        {subMenu.name}
                    </Link>
                </li>
            )
        });
    }

    adminTab(isAdmin) {
        if (isAdmin) {
            const currpath = this.getCurrpath();
            const adminLinks = tabutils.createTabs(currpath, this.state.adminItems, this.selectTab);
            const isSubMenuPath = tabutils.isSubMenuPath(currpath, this.state.adminItems);
            return (
                <li className="nav-item dropdown">
                    <Link
                        className={isSubMenuPath ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'}
                        to="#"
                        id="adminDropDown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                        Admin
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="adminDropDown">
                        {adminLinks}
                    </ul>
                </li>
            );
        }
    }

    navItems() {
        const currpath = this.getCurrpath();
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

    getCurrpath() {
        switch (window.location.pathname) {
            case '/approve':
                return '/admin';
            case '/':
                return '/home';
            default:
                return window.location.pathname;
        }
    }

    render() {
        const nameItems = this.navItems();
        const signInText = this.createSignInLink(this.props.loggedIn);
        const admintab = this.adminTab(this.props.isAdmin);
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
                                {admintab}
                            </ul>
                        </div>
                        <div className="sks-login">
                            <ul>
                                <li><Link to={'/register'}>Register</Link></li>
                                <li>{signInText}</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Switch>
                        <Route exact path={'/'} component={SksHome} selectTab={'1'}/>
                        <Route exact path={'/home'} component={SksHome}/>
                        <Route exact path={'/aboutus'} component={AboutUs}/>
                        <Route exact path={'/gallery'} component={Gallery}/>
                        <Route exact path={'/committee'} component={Committee}/>
                        <Route exact path={'/contactus'} component={ContactUs}/>
                        <Route exact path={'/register'} component={Register}/>
                        <Route exact path={'/managemembers'} component={ManageUsers}/>
                        <Route exact path={'/paymentreports'} component={Committee}/>
                        <Route exact path={'/addpayment'} component={Committee}/>
                    </Switch>
                </section>
                <SksFooter.sksfooter/>
                <Login isOpen={(this.props.loggedIn || httputils.isLoggedIn()) ? false : this.state.displaySignIn}
                       toggle={this.toggleSignIn}
                       backdrop={this.state.backdrop}/>
            </div>
        );
    }

    createSignInLink(loggedIn) {
        return (loggedIn || httputils.isLoggedIn()) ?
            <span onClick={() => this.signOut()}>Sign Out</span> :
            <span onClick={() => this.toggleSignIn(true)}>Sign In</span>;
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
        isAdmin: state.login.admin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(AuthActions.logout()),
        checkUserRole: () => dispatch(AuthActions.checkUserRole())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SksMain);