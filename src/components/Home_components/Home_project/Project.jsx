import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import headbox from '../../../assets/images/headbox.png'
import renovate from './../../../assets/images/renovate.png'
import './style.css'
import Slide from './Project_slide/Slide';
export default function Project() {
    return (
        <>
        <section id='home-project'>
           
            <div className="container-fluid">
            <div className="section-title">
                <img src={headbox} />
                <h3 className='proj-title'>Projects</h3>
            </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6">
                        <div className="project-box">
                            <div className="box-picture">
                                <h2>Renovate your home</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <a href="#">See More <FaArrowRight /> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6">
                        <img src={renovate} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <Slide/>
        </>

    )
}
