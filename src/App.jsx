import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import "./index.css"






const App = () => {

  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </>
    </div>
  )
} 

export default App;
