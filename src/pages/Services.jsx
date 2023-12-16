import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import ServiceHeader from '../components/Service_components/Service_header/ServiceHeader'
import Service from '../components/Service_components/Service/Service'
import ServiceSolution from '../components/Service_components/Service_solution/ServiceSolution'
import Footer from '../components/Layout/Footer/Footer'

export default function Services() {
  return (
    <section id='services'>
       <Navbar/>
       <ServiceHeader/>
       <Service/>
       <ServiceSolution/>
       <Footer/>
    </section>
  )
}
