import React from 'react'
import './style.css'
import { FaWhatsapp,FaLinkedinIn,FaFacebookF,FaYoutube  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function HomeContact() {
    return (
        <section id='home-contact'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9873800497126!2d49.94098511237826!3d40.409130355981524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630439912ca7%3A0x66b1a1a1cc5e63f1!2sQara%20Qarayev%2C%20Bak%C4%B1!5e0!3m2!1sen!2saz!4v1702378915856!5m2!1sen!2saz" width="600" height="450" style={{ border: "1" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-xxl-6">
                        <div className="media">
                            <h1 className='equal'>Let us know what you think!</h1>
                            <p className='equal'>Lorem ipsum dolor sit amet consectetur. Porta phasellus ipsum tellus morbi amet orci faucibus lectus lacus vitae feugiat enim ultricies etiam morbi dui risus.</p>
                            <div className="contact-media">
                                <h6 className='equal'>Follow us on social media</h6>
                                <div className="media-icons">
                                    <FaWhatsapp className='media-icon'/>
                                    <FaInstagram className='media-icon'/>
                                    <FaLinkedinIn className='media-icon'/>
                                    <FaFacebookF className='media-icon'/>
                                     <FaYoutube className='media-icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
