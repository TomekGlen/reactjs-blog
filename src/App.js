import React, { Component } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./index.css"

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/Home';
import Okna from './components/Okna';
import Drzwi from './components/Drzwi';
import BramyGarazowe from './components/BramyGarazowe';
import Wnetrza from './components/Wnetrza';
import Realizacje from './components/Realizacje';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ParallaxProvider>
          <Header />

            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/okna" component={Okna} />
             <Route path="/drzwi" component={Drzwi} />
             <Route path="/bramy-garazowe" component={BramyGarazowe} />
             <Route path="/wnetrza" component={Wnetrza} />
             <Route path="/realizacje" component={Realizacje} />
             <Route path="/okna" component={Okna} />
             <Route path="/okna" component={Okna} />
             <Route path="/okna" component={Okna} />
             <Route path="/okna" component={Okna} />

             <Route component={Error}/>
           </Switch>

           <Footer />
        </ParallaxProvider> 
      </BrowserRouter>
    );
  }
}

export default App;
 