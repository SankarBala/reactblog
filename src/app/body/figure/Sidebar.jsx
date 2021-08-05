import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from './../../../assets/maps/world.json';
import ProfilePhoto from './../../../assets/images/cameraman.jpg';
import { FaFacebookF, FaHeart, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/all'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="py-4 text-center">

            <div className="titleWrapper"><h3 className="text-uppercase">Where are you from?</h3></div>

            <VectorMap className="mx-2 my-5" {...worldLowRes} />

            <h3 className="text-secondary">Las Vegus, Nevada, USA</h3>

            <hr className="my-5" />

            <div className="titleWrapper"><h3 className="text-uppercase">Hello</h3></div>

            <img src={ProfilePhoto} alt="profile" className="profilePhoto my-4" />

            <span className="authorName d-block">By Jessica Stanley</span>
            <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, error?</p>


            <div className="d-flex justify-content-between p-3 my-5">
                <div className="p-2 flex-fill socialIcon"><a href="https://sankarbala.github.io/portfolio/"> <FaInstagram />   </a> </div>
                <div className="p-2 flex-fill socialIcon"><a href="https://sankarbala.github.io/portfolio/"> <FaFacebookF />   </a> </div>
                <div className="p-2 flex-fill socialIcon"><a href="https://sankarbala.github.io/portfolio/"> <FaTwitter />     </a> </div>
                <div className="p-2 flex-fill socialIcon"><a href="https://sankarbala.github.io/portfolio/"> <FaPinterest />   </a> </div>
                <div className="p-2 flex-fill socialIcon"><a href="https://sankarbala.github.io/portfolio/"> <FaHeart />       </a> </div>
            </div>

            <div className="titleWrapper"> <h3 className="text-uppercase">Trending post</h3></div>



            <div className="trendingPostWrapper py-4 text-center">
                <img src={ProfilePhoto} alt="profile" className="trendingPostImage my-4" />
                <h2 className="text-light">Perfect For New Day Time</h2>
                <div className="block-title-wrapper"><Link className="block-title btn btn-light" to="/">Read More</Link></div>
            </div>

            <div className="popularPost py-5">
                <div className="titleWrapper"> <h3 className="text-uppercase">Popular post</h3></div>

                <div className="row my-5">
                    <div className="col-4">
                        <img src={ProfilePhoto} alt="profile" className="popularPostThumbnail" />

                    </div>
                    <div className="col-8 text-start text">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <h5 className="text-secondary">July 15, 2021</h5>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-4">
                        <img src={ProfilePhoto} alt="profile" className="popularPostThumbnail" />

                    </div>
                    <div className="col-8 text-start text">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <h5 className="text-secondary">July 15, 2021</h5>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-4">
                        <img src={ProfilePhoto} alt="profile" className="popularPostThumbnail" />

                    </div>
                    <div className="col-8 text-start text">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <h5 className="text-secondary">July 15, 2021</h5>
                    </div>
                </div>
               



            </div>



            <div className="sidebarCatList">
                <Link className="btn btn-lgt py-4 my-2 w-100 cat-btn" to="/">Interior</Link>
                <Link className="btn btn-drt      py-4 my-2 w-100 cat-btn" to="/">Fashion</Link>
                <Link className="btn btn-lgt py-4 my-2 w-100 cat-btn" to="/">Lifestyle</Link>
                <Link className="btn btn-lgt py-4 my-2 w-100 cat-btn" to="/">Travel</Link>
            </div>

            <div className="instagramGalary py-5">
                <div className="titleWrapper"> <h3 className="text-uppercase">Instagram</h3></div>

                <div className="row pt-5 pb-4">
                    <div className="col-6 p-2">  <img src={ProfilePhoto} alt="profile" className="instagramPhoto" /></div>
                    <div className="col-6 p-2">  <img src={ProfilePhoto} alt="profile" className="instagramPhoto" /></div>
                    <div className="col-6 p-2">  <img src={ProfilePhoto} alt="profile" className="instagramPhoto" /></div>
                    <div className="col-6 p-2">  <img src={ProfilePhoto} alt="profile" className="instagramPhoto" /></div>
                </div>
                <div className="instaFooter">
                    <h2><FaInstagram className="pr-3" /> follow me!</h2>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar
