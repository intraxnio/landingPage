import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/broadreachLogo.png'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light mt-2">

            <div className="container" > 
                {/* <Link href="/"><a className="navbar-brand text-success" ><Image src={logo} style={{ maxWidth: '100px', maxHeight: '50px', marginLeft: '10px' }} alt="buzzreach" /></a></Link> */}
                <Link href="/"><a className="navbar-brand" style={{fontSize: '22px', fontWeight: 500, color: '#11009E', fontFamily: "Poppins" }} >linck<span style={{color: '#D80032', fontSize: '28px'}}>.</span>one</a></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse ms-md-5" id="navbarNav">
                    <ul className="navbar-nav md-5">
                        <li className="nav-item me-5 ms-2">
                            <Link href="/"><a className="nav-link active my-2 g-fonts" aria-current="page" style={{textDecoration: 'none'}}>Home</a></Link>
                        </li>

                        <li className="nav-item me-5 ms-2">
                            <Link href="/pricing"><a className="nav-link my-2 g-fonts" aria-current="page" style={{textDecoration: 'none'}}>Use Cases</a></Link>
                        </li>

                        <li className="nav-item me-5 ms-2">
                            <Link href="/pricing"><a className="nav-link my-2 g-fonts" aria-current="page" style={{textDecoration: 'none'}}>Pricing</a></Link>
                        </li>



                    </ul>
                </div>
            </div>


        </nav>




    )
}
