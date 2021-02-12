import React from 'react';
// import { Row, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
             <div className="container-fluid ">
                    <div className="row  pt-5 pb-5">
                        <div className="col-md-4">
                            <div className="row text-center my-3">
                           
                                <Link className="col-12 footer-link" to='/home'>Home</Link>
                                <Link className="col-12 footer-link" to='/menu'>Menu</Link>
                                <Link className="col-12 footer-link" to='/contactus'>Contact</Link>
                           
                            </div>
                        </div>
                            <div className="col-md-4 footer-link text-center my-3">
                                <p className=" my-0">2020 Stomping Grounds Cafe</p>
                                <p className="my-0 ">303 Welch Ave. Ames, Iowa</p>
                            </div>
                            <div className="col-md-4 text-center my-3">
                                <a role="button" className="text-right footer-link" href="tel:+12065551234"><i class="fa fa-phone "></i> 1-515-515-5115</a><br />
                                <a role="button" className="footer-link" href="mailto:stomping@grounds.com"><i class="fa fa-envelope-o "></i> stomping@grounds.com</a>
                                <div class="footer-link">
                                    <a className="text-white-50 d-inline-block" href="https://www.facebook.com/Stomping-Grounds-107335579324901/" >Follow us on facebook</a>{' '}
                                    <a className="btn btn-social-icon btn-facebook btn-link" href="https://www.facebook.com/Stomping-Grounds-107335579324901/ "><i className="fa fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    );
}

export default Footer;