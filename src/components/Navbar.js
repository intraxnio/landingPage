import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/Intraxn-logo.svg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-2">

            <div className="container-fluid">
                <Link className="navbar-brand text-success" href="/"> <Image src={logo} alt="intraxn" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse ms-md-5" id="navbarNav">
                    <ul className="navbar-nav ms-md-5">
                        <li className="nav-item me-5 ms-2">
                            <a className="nav-link active my-2 g-fonts" aria-current="page" href="#">Home</a>
                        </li>

                        {/* <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Face Pack</a>
                        </li> */}
                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <a className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Brand
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        {/* <li className="nav-item mx-4">
                            <a className="nav-link" href="#">How it works</a>
                        </li> */}

                        <li className="nav-item dropdown me-5 ms-2 my-2">
                            <a className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Creator
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown me-5 ms-2 my-2">
                            <a className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                How it works
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        <li className="nav-item me-5 ms-2 my-2">
                            <a className="nav-link g-fonts" href="#">Blog</a>
                        </li>


                        <div className="container my-2 ms-md-5">
                            <button className="btn px-5 login-btn-grad btn-g-fonts text-white">Login</button>

                        </div>

                        <div className="container my-2">
                            <button className="btn px-5 signup-btn-grad btn-g-fonts">Signup</button>

                        </div>


                    </ul>
                </div>
            </div>

        </nav>
    )
}
