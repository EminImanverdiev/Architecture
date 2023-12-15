import React from 'react'
import './style.css'
import { CiImageOn } from "react-icons/ci";
export default function Counter() {
    return (
        <section id='counter'>
            <div className="container">
                <div className="row">
                    <h2>Numbers that showcase our success</h2>
                    <div className="col-xxl-3">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>200+</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>200+</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>200+</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>200+</h3>
                            <h6>Websites build</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
