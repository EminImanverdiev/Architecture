import React from 'react'
import './style.css'
import { FaArrowRight } from "react-icons/fa6";
export default function Service() {
    return (
        <section id='service'>
            <div className="service-title">
                <h1>Highly effective solutions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                <div className="col-xxl-4 col-md-6 col-xl-6 col-lg-6">
                        <div className="service-item">
                            <h2>01</h2>
                            <h6>Web design</h6>
                            <p> laudantium laboriosam. Perspiciatis et dolor fugit, cupiditate, ad accusantium maxime repellat placeat iusto ipsam quos esse?</p>
                            <span>
                                <a href="#" className='link'>Learn More</a>
                                <span><FaArrowRight className='item-icon' /></span>
                            </span>

                        </div>

                    </div>
                    <div className="col-xxl-4 col-md-6 col-xl-6 col-lg-6">
                        <div className="service-item">
                            <h2>01</h2>
                            <h6>Web design</h6>
                            <p> laudantium laboriosam. Perspiciatis et dolor fugit, cupiditate, ad accusantium maxime repellat placeat iusto ipsam quos esse?</p>
                            <span>
                                <a href="#" className='link'>Learn More</a>
                                <span><FaArrowRight className='item-icon' /></span>
                            </span>

                        </div>

                    </div>
                    <div className="col-xxl-4 col-md-6 col-xl-6 col-lg-6">
                        <div className="service-item">
                            <h2>01</h2>
                            <h6>Web design</h6>
                            <p> laudantium laboriosam. Perspiciatis et dolor fugit, cupiditate, ad accusantium maxime repellat placeat iusto ipsam quos esse?</p>
                            <span>
                                <a href="#" className='link'>Learn More</a>
                                <span><FaArrowRight className='item-icon' /></span>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
