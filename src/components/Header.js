import React, {Component} from "react";
import {
    MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBNavbarToggler
    } from "mdbreact";


    class Header extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        };

        render() {
            return (
                <MDBNavbar expand="md">
                  <MDBContainer>
                  <MDBNavbarBrand>
                    <img src="http://dwdomel.pl/logo-blog.png" alt="asd" className="navbar-logo mr-2 img-fluid"/>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.toggleCollapse} className="navbar-light"/>
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem active>
                        <MDBNavLink className="d-none d-lg-block" to="/">HOME</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/okna">OKNA</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/drzwi">DRZWI</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/bramy-garazowe">BRAMY GARAŻOWE</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/wnetrza">WNĘTRZA</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/realizacje">REALIZACJE</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="d-none d-lg-block" to="https://www.dwdomel.pl">STRONA DWDOMEL</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="d-none d-xl-block" to="/gdzie-kupic">GDZIE KUPIĆ?</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                  </MDBContainer>
                </MDBNavbar>
            );
        }
    }
export default Header