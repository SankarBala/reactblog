import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

import SliderImage from "./../../assets/images/sliders/images.jpg";

export default function Slider() {
    const scrollDown = () => {
        window.scrollTo(0, 1000);
    }
    return (
        <div className="container-fluid px-3">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={SliderImage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-block">
                            <h5 onClick={scrollDown}>SCROLL</h5>
                            <p onClick={scrollDown}><FaArrowDown /></p>
                        </div>
                    </div>

                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

        </div>
    )
}
