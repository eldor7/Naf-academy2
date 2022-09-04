import React from 'react'
import { Border, Logo, Navbar, Navbarcon, Navbarright, Navhome } from './style'
import logo from '../../../assets/img/logo.png'




const NavbarPage = () => {
  return (
    <Navbarcon>
        <Navbar>
                <Logo src={logo}/>
                <Navbarright>
                    <p>Kurslar</p>
                    <Border/>
                    <p>Ochiq Darslar</p>
                    <Border/>
                    <p>Biz bilan aloqa</p>
                </Navbarright>
            </Navbar>
            <Navhome>
                <h1>Kursni tanlang va oʻqishni <br />boshlang!</h1>
                <p>Hammasi juda oddiy, bilim uchun investitsiya qiling va zamonaviy <br />kasbni egallang !</p>
            </Navhome>
        </Navbarcon>
  )
}

export default NavbarPage