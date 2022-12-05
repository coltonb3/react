import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'





const App = () => {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Contact />
        <Footer />
      </>
    </div>
  )
} 



// import './App.css';
// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout';
// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<Layout/>} />
//       </Routes>
//       </>
//   )
// }


export default App;
