import React from 'react'
import './style.css'
import { FaArrowRight } from "react-icons/fa6";
import renphoto from './../../../assets/images/renphoto.png'
export default function Renovate() {
    return (
        <section id='home-renovate'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="renovate-box">
                            <div className="box-picture">
                                <h2>Renovate your home</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <a href="#">See More <FaArrowRight/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <img src={renphoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
