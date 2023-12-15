import React from 'react'
import './style.css'
import frame from '../../../assets/images/frame.png'
export default function AboutProject() {
  return (
    <section id='about-project'>
        <div className="section-title">
            <hr />
            <h3>Highly effective solutions</h3>
            </div>

            <div className="container-fluid">
                  <div className="row">
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div> 
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div> 
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div> 
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div> 
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div> 
                     <div className="col-xxl-4">
                         <div className="project-box">
                             <img src={frame} alt="" />
                             <h5>Heading</h5>
                             <p>Lorem ipsum dolor sit amet.</p>
                         </div>
                     </div>     
                  </div>
            </div>
    </section>
  )
}
