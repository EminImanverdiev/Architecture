import React from 'react'
import './style.css'
import logo from '../../../assets/logo/logo.jpg'
import { FaWhatsapp,FaLinkedinIn,FaFacebookF,FaYoutube  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <div className="container first-container">
                <div className="row">
                    <h3>Have an idea? Let’s get your project started today!</h3>
                    <a href="#" className='link'>Get in touch</a>
                </div>
            </div>
            <div className="container second-container">
                <div className="row">
                    <div className="col-xxl-3">
                        <div className="footer-logo">
                            <a className="foot-logo" href="#">
                                <img src={logo} alt="Logo Picture" />
                                <span>Architecture and design</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="navbar-links">
                            <Link className='link' to="/home">Home</Link>
                            <Link className='link' to="/about">About</Link>
                            <Link className='link' to="/contact">Contact</Link>
                            <Link className='link' to="/services">Services</Link>
                        </div>
                    </div>
                    <div className="col-xxl-3">
                    <div className="media-icons">
                                     <a href="#"><FaWhatsapp className='media-icon'/></a> 
                                     <a href="#"><FaInstagram className='media-icon'/></a> 
                                     <a href="#"><FaLinkedinIn className='media-icon'/></a> 
                                     <a href="#"><FaFacebookF className='media-icon'/></a> 
                                     <a href="#"><FaYoutube className='media-icon'/></a>  
                                </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h6>Copyright © 2025 Digital Agency | All Rights Reserved | <span>Terms and Conditions | Privacy Policy</span> </h6>
            </div>
        </footer>
    )
}
