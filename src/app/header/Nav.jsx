import React from 'react';

import { FaBars, FaShoppingCart } from 'react-icons/all';


const Nav = () => {
    return (
        <React.Fragment>
            <div className="container text-center">
                <div className="row">

                    <div className="col-md-2">
                        <form action="" method="GET">
                            <input type="search" placeholder="Search" />
                        </form>
                    </div>

                    <div className="col-md-8">
                        <nav id="menu">
                            <ul>
                                <li className="active"><a href="#">Home</a></li>
                                <li className=""><a className="" href="#">Home</a></li>
                                <li className=""><a className="" href="#">Features</a></li>
                                <li className=""><a className="" href="#">Travel</a></li>
                                <li className=""><a className="" href="#">Pages</a></li>
                                <li className=""><a className="" href="#">Shop</a></li>
                                <li className=""><a className="" href="#">About</a></li>
                                <li className=""><a className="" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2 text-center">

                        <FaShoppingCart className="mx-3 mt-4"/>
                        <FaBars className="mx-3 mt-4"/>

                    </div>


                </div>
            </div>

        </React.Fragment>
    );
}

export default Nav;