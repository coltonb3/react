import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'





const App = () => {

  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
      </>
    </div>
  )
} 

export default App;
