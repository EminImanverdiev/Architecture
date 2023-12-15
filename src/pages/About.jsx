import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutHeader from '../components/About_components/About_header/AboutHeader'
import AboutSolution from '../components/About_components/About_solution/AboutSolution'
import AboutCounter from '../components/About_components/About_counter/AboutCounter'
import AboutProject from '../components/About_components/About_solution_project/AboutProject'
import HomeContact from '../components/Home_components/Home_contact/HomeContact'
import Footer from '../components/Footer/Footer'

export default function About() {
  return (
    <section id='about'>
      <Navbar/>
      <AboutHeader/>
      <AboutSolution/>
      <AboutCounter/>
      <AboutProject/>
      <HomeContact/>
      <Footer/>
    </section>
  )
}
