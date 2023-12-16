import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import HomeContact from '../components/Home_components/Home_contact/HomeContact'
import Footer from '../components/Layout/Footer/Footer'

export default function Contact() {
  return (
    <section id='contact'>
        <Navbar/>
        <HomeContact/>
        <Footer/>
    </section>
  )
}
