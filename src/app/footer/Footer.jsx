import React from 'react'
import { BiSend, BsArrowUp, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/all'
import {BrowserRouter as Router, Link } from 'react-router-dom'

const Footer = () => {
    const backToTop = () => {
        window.scroll(0, 0);
    }
    return (
        <footer className="mt-3 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 bg-info text-center footerWidgetLeft">
                        <div className="footerWidgetLeftContent p-5">
                            <h2>It Just Got Personal</h2>
                            <hr/>
                            <p className="my-5">Lorem, ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum similique quia!</p>
                           <div className="flex justify-content-between">
                            <input type="email" className="subscriptionbox flex-grow-1" placeholder="Your email here" />
                            <BiSend className="subscriptionbtn" />
                           </div>
                        </div>
                    </div>

                    <div className="col-md-6 text-center p-5 footerWidgetRight">
                        <div className="footerWidgetRightContent">
                            <h2><Link className="hero-title" to="/">JESSI</Link></h2>
                            <p className="subtitle">Personal blog</p>

                            <nav id="footerNav" className="my-4">
                                <Router>
                                    <ul>
                                        <li><Link className="" to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
                                        <li><Link className="" to={`${process.env.PUBLIC_URL}/shop/`}>Shop</Link></li>
                                        <li><Link className="" to={`${process.env.PUBLIC_URL}/about/`}>About</Link></li>
                                        <li><Link className="" to={`${process.env.PUBLIC_URL}/contact/`}>Contact</Link></li>
                                    </ul>
                                </Router>
                            </nav>
                            <nav id="footerSocialNav" className="my-4">
                                <ul>
                                    <li><a target="_blank" rel="noreferrer" href="https://sankarbala.github.io/portfolio/"><FaInstagram /> </a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://sankarbala.github.io/portfolio/"><FaTwitter /> </a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://sankarbala.github.io/portfolio/"><FaPinterest /> </a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://sankarbala.github.io/portfolio/"><FaFacebook /> </a></li>
                                </ul>
                            </nav>

                            <span >&copy; 2019-Jessi</span>

                        </div>
                    </div>


                </div>
                <div className="row pt-5 pb-3">
                    <div className="col-12 text-center">
                        <BsArrowUp className="back-to-top" onClick={backToTop} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
