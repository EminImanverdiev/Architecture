import React from 'react'
import HomeHeader from '../components/Header/Home_Header/HomeHeader'
import Counter from '../components/Home_components/Home_counter/Counter'
import HomeService from '../components/Home_components/Home_service/HomeService'
import Renovate from '../components/Home_components/Home_renovate/Renovate'
import HomeDetail from '../components/Home_components/Home_detail/HomeDetail'
import Project from '../components/Home_components/Home_project/Project'
import Information from '../components/Home_components/Home_information/Information'
import HomeContact from '../components/Home_components/Home_contact/HomeContact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div id='home-page'>
        <HomeHeader/>
        <Counter/>
        <HomeService/>
        <Renovate/>
        <HomeDetail/>
        <Project/>
        <Information/>
        <HomeContact/>
        <Footer/>
    </div>
  )
}
