import React from 'react'
import './style.css'
import Ellipse from '../../../assets/images/Ellipse 1.png'
import Navbar from '../../Layout/Navbar/Navbar'
export default function HomeHeader() {
  return (
    <header id='home-header'>
        <Navbar/>
        <div className="container-fluid header-container" >
            <div className="row">
                <div className="col-xxl-8">
                     <div className="home-header-content">
                        <h2>Architecture and Design</h2>
                        <p>Floor and Roof of Haibara Township / SAI Architectural Design Office Floor and Roof of Haibara Township / SAI Architectural Design Office Floor and Roof of Haibara Township / SAI Architectural Design Office Floor and Roof of Haibara Township / SAI Architectural Design Office</p>
                     </div>
                </div>
                <div className="col-xxl-4">
                    <img src={Ellipse} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}
