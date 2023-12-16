import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import Footer from '../components/Layout/Footer/Footer'
import FagQuestion from '../components/Fag_components/Fag_questions/FagQuestion'

export default function Fag() {
  return (
    <section id='fag'>
      <Navbar/>
      <FagQuestion/>
      <Footer/>
    </section>
  )
}
