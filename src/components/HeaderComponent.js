import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            
                <Navbar dark sticky="fixed-top" expand="md">
                    <div className="container">
                        {/*Creating the links for the Header */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <div className="ml-auto">
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className='p-3'>
                                    <NavLink className="nav-link" to="/home"> Home </NavLink>
                                </NavItem >
                                <NavItem className='p-3'>
                                    <NavLink className="nav-link" to="/directory"> Menu </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                        {/* Here is the center Logo */}
                        <NavbarBrand className="mr-auto ml-auto" href="/"><img height='100' width='370'  src="./assets/imgs/StompingGrounds-Logo.png"  alt="Brand Logo" /></NavbarBrand>
                        <div className="ml-auto">   
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className='p-3'>
                                    <NavLink className="nav-link" to="/contactus"> Contact</NavLink>
                                </NavItem>
                                <NavItem className='p-3'>
                                   <a className='nav-link' href="https://www.facebook.com/Stomping-Grounds-107335579324901/">Dashboard</a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>

                    </div>
                </Navbar>
           
        );
    }
}

export default Header;


