import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <header>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">ReactPress</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/register" className="nav-link">Register</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login" className="nav-link">Login</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default Header;