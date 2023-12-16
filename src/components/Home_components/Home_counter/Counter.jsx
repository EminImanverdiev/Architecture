import React,{useState} from 'react'
import './style.css'
import { CiImageOn } from "react-icons/ci";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export default function Counter() {
     const [counterOn,setCounterOn]=useState(false)
    return (
        <section id='counter'>
            <div className="container">
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className="row">
                    <h2>Numbers that showcase our success</h2>
                    <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>{counterOn && <CountUp start={0} end={156} duration={2} delay={0}/>} +</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>{counterOn && <CountUp start={1000} end={756} duration={2} delay={0}/>} +</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                          <h3>{counterOn && <CountUp start={20} end={752} duration={2} delay={1}/>} +</h3>
                            <h6>Websites build</h6>
                        </div>

                    </div>
                    <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
                        <div className="counter-card">
                            <CiImageOn className='card-icon'/>
                            <h3>{counterOn && <CountUp start={1} end={302} duration={3} delay={0}/>} +</h3>
                            <h6>Websites build</h6>
                        </div>
                    </div>
                </div>
        </ScrollTrigger>
            </div>
        </section>
    )
}
