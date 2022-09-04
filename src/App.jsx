import React from 'react'
import AboutPage from './components/OchiqdarsPage/AboutPage'
import FooterPage from './components/OchiqdarsPage/FooterPage'
import NavbarPage from './components/OchiqdarsPage/NavbarPage'

const App = () => {
  return (
    <div>
      <NavbarPage/>
      <AboutPage/>
      <FooterPage/>
    </div>
  )
}

export default App