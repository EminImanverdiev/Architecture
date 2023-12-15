import React from 'react'
import detail from './../../../assets/images/detail.png'
import './style.css'
import { FaArrowRight } from "react-icons/fa6";

export default function HomeDetail() {
  return (
    <section id='home-detail'>
       <div className="container-flex">
          <div className="row">
              <div className="col-xxl-6 col-md-6">
                <img src={detail} alt="" />
              </div>
              <div className="col-xxl-6 col-md-6">
              <div className="detail-box">
                            <div className="box-content">
                                <h2>Detailed Plan</h2>
                                <ul>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <li>Custom concrete flooring with glass chips</li>
                                    <a href="#">See More <FaArrowRight/></a>
                                </ul>
                            </div>
                        </div>
              </div>
          </div>
       </div>
    </section>
  )
}
