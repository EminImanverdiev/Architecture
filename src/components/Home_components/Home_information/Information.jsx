import React from 'react'
import './style.css'
import { FaRegUser } from "react-icons/fa";
import client from '../../../assets/images/client.png'
export default function Information() {
  return (
    <section id='home-information'>
      <h2>What our clients have to say</h2>
      <p className='inf-text'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3">
            <div className="inf-box">
              <div className="box-left">
                <FaRegUser className='box-user' />
              </div>
              <div className="box-right">
                <h6>Brian Clark</h6>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="inf-box">
              <div className="box-left">
                <FaRegUser className='box-user' />
              </div>
              <div className="box-right">
                <h6>Brian Clark</h6>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="inf-box">
              <div className="box-left">
                <FaRegUser className='box-user' />
              </div>
              <div className="box-right">
                <h6>Brian Clark</h6>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="inf-box">
              <div className="box-left">
                <FaRegUser className='box-user' />
              </div>
              <div className="box-right">
                <h6>Brian Clark</h6>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-xxl-6">
               <img src={client} alt="" />
            </div>
            <div className="col-xxl-6 ">
               <div className="client-box">
                  <h5 className='extra'>"Revolutionized the way I work"</h5>
                  <p className='extra'>Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.</p>
                  <h5 className='extra'>Brian Clark</h5>
                  <h4 className='extra'>VP of Product at Snapchat</h4>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
