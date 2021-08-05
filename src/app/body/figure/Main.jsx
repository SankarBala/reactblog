import React from 'react'
import { RiArrowRightSLine } from 'react-icons/all'
import { Link } from 'react-router-dom'
import CameraMan from './../../../assets/images/cameraman.jpg'

const Main = () => {
    return (
        <main className="">
            <div className="row">
                <div className="col-12 top-news">

                    <img src={CameraMan} alt="cameraman" width="100%" />

                    <Link className="block-title btn btn-light" to="/">Interior</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">The Weekend Style & Sales</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit.
                            Aenean consequat aliquam sit amet alesa dui ferme umit amet.
                            Etiam a euismod velit, sit amet porttitor magna. Morbi accumsan
                            portofina abrsrasimo costa sodales vitae fringilla. </p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 pt-1"> 
                        <Link to="" className="solid-link">FASSION</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark btn-rounded" to="">READ MORE</Link>
                        </div>
                        <div className="col-4 pt-1 text-end">
                            <Link to="" className="solid-link"> SHARE <i className="las la-share-alt" /></Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row py-5 my-5">

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Interior</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>

                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">
                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Fassion</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Life Style</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Travel</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Travel</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Travel</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Travel</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>

                <div className="col-md-6 categories mb-5">

                    <img src={CameraMan} alt="cameraman" width="100%" />
                    <Link className="block-title btn btn-light" to="/">Travel</Link>

                    <div className="col-10 bg-light p-4 text-center img-caption ">
                        <div>
                            <span className="soft-heading">2 month ago</span>
                        </div>

                        <h2 className="my-4">Sweater weather</h2>

                        <p className="text-secondary my-4"><span className="mx-2">3 MINS READ </span>.<span className="mx-2"> BY JESSICA</span></p>


                        <p>Proin eleifend lobortis purus nec mollis risus ndrerit mollis risus ndrerit.</p>
                    </div>

                    <div className="row footer py-2">
                        <div className="col-4 mt-2"></div>
                        <div className="col-4 text-center">
                            <Link className="btn btn-dark" to="/"><RiArrowRightSLine /></Link>
                        </div>
                        <div className="col-4 mt-2  text-end">

                        </div>
                    </div>
                </div>



            </div>

        </main>
    )
}

export default Main
