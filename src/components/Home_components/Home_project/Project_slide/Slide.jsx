import React from 'react'
import slide1 from './../../../../assets/images/slide1.png'
import './style.css'
export default function Slide() {
  return (
    <section id='project-slide'>
        <div className="container-fluid">
             <div className="row">
                 <div className="col-xxl-3">
                     <div className="slide-box" style={{width:"90%"}}>
                        <img src={slide1} alt="" />
                     </div>
                 </div>
                 <div className="col-xxl-3">
                     <div className="slide-box">
                        <img src={slide1} alt="" />
                     </div>
                 </div>
                 <div className="col-xxl-3">
                     <div className="slide-box">
                        <img src={slide1} alt="" />
                     </div>
                 </div>
                 <div className="col-xxl-3">
                     <div className="slide-box">
                        <img src={slide1} alt="" />
                     </div>
                 </div>
             </div>
        </div>
    </section>
  )
}
