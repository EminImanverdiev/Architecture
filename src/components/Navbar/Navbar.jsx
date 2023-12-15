import React from 'react'
import logo from '../../assets/logo/logo.jpg'
import './style.css'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo}  alt="Logo Picture"/>
                    <span>Architecture and design</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Architecture and Design</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex box-search-item" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <IoIosSearch className='form-search'/>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
