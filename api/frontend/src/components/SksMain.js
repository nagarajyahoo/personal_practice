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
                <section>
                    <Navbar className={'sks-navbar'}>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-lg-end">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>;
                </section>
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