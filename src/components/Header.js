import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {
    MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBBtn
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';

import Headerarticle from './header-article';

    class NavbarPage extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        };

        render() {
            return (
              <Router>
                <MDBNavbar expand="md">
                  <MDBContainer>
                  <MDBNavbarBrand>
                    <img src="http://dwdomel.pl/logo-blog.png" alt="asd" className="navbar-logo mr-2 img-fluid"/>
                  </MDBNavbarBrand>
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem active>
                        <MDBNavLink to="#!">HOME</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">OKNA</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">DRZWI</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">BRAMY GARAŻOWE</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">WNĘTRZA</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">REALIZACJE</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">STRONA DWDOMEL</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">GDZIE KUPIĆ?</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                  </MDBContainer>
                </MDBNavbar>
                <div className="page-header header-filter clear-filter" data-parallax="true">
                  <div className="container show-top">
                    <div className="row h-100 w-100">
                      <div className="col-xl-9 h-100">
                     
                        <div className="brand">
                        <Parallax x={[10, -10]} tagOuter="figure">
                          <MDBBtn className="btn m-0 mb-3">KATEGORIA</MDBBtn>>                          
                          <h1 className="title2-main">Okna do domu - jakie wybrać i dlaczego?</h1>
                          <h3 className="title2">Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.Start the Development With A Badass Bootstrap 4 UI Kit inspired by Material Design.</h3>
                          </Parallax>
                          </div>
                        
                      </div>
                      <div className="col-xl-3 header-others">
                      <Parallax x={[0, 40]} tagOuter="figure">
                        <div className="header-others-cont">
                          <Headerarticle/>
                          <Headerarticle/>
                          <Headerarticle/>
                          <Headerarticle/>
                        </div>
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </div>
                
              </Router>
            );
        }
    }
export default NavbarPage