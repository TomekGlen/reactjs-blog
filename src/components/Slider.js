import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import { MDBBtn } from "mdbreact";

import Headerarticle from './header-article';

    class Header extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        };

        render() {
            return (
                <div className="page-header header-filter clear-filter" data-parallax="true">
                  <div className="container show-top">
                    <div className="row h-100 w-100">
                      <div className="col-xl-9 h-100">
                        <div className="brand">
                          <Parallax x={[10, -10]} tagOuter="figure">
                            <MDBBtn className="btn m-0 mb-3 kategoria">KATEGORIA</MDBBtn>                          
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
            );
        }
    }
export default Header