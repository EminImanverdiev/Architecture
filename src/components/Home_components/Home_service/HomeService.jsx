import React from 'react'
import headbox from '../../../assets/images/headbox.png'
import './style.css'
import textimg from '../../../assets/images/text.png'
export default function HomeService() {
  return (
    <section id='home-service'>
      <div className="container-fluid">
         <div className="section-title">
           <img src={headbox}/>
           <h3>Services</h3>
         </div>
         <div className="row">
        <div className="col-xxl-4 col-md-6 col-lg-6 col-xl-6">
             <div className="service-box">
                 <div className="box-picture" style={{backgroundImage:`url(${textimg})`}}>
                 </div>
             </div>
        </div>
        <div className="col-xxl-4 col-md-6 col-lg-6 col-xl-6">
             <div className="service-box">
                 <div className="box-picture" style={{backgroundImage:`url(${textimg})`}}>
                 </div>
             </div>
        </div>
        <div className="col-xxl-4 col-md-6 col-lg-6 col-xl-6">
             <div className="service-box">
                 <div className="box-picture" style={{backgroundImage:`url(${textimg})`}}>
                 </div>
             </div>
        </div>
         </div>
      </div>
    </section>
  )
}
