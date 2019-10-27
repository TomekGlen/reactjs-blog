import React, { Component } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';


import "./index.css"

import Header from './components/Header'
import CardsSection from "./components/CardsSection"
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Header />
        <CardsSection />
        <Footer />
      </ParallaxProvider>
    );
  }
}

export default App;
 