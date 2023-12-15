import React from 'react'
import replace from '../../../assets/images/replace.png'
import './style.css'
export default function AboutCounter() {
    return (
        <section id='about-counter'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-6 first-col">
                        <img src={replace} alt="" />
                    </div>
                    <div className="col-xxl-6">
                        <div className="counter-box">
                            <h4>Highly effective solutions</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                            <div className="boxes">
                                <div className="box">
                                    <b>200+</b> <br />
                                    <strong>Websites build</strong>
                                </div>
                                <div className="box">
                                    <b>97%</b> <br />
                                    <strong>Client satisfaction</strong>
                                </div>
                                <div className="box">
                                    <b>34+</b> <br />
                                    <strong>Team members</strong>
                                </div>
                                <div className="box">
                                    <b>100+</b> <br />
                                    <strong>Amazing clients</strong>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
